import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_TOKEN;
if (!apiKey) {
  console.error('Missing RESEND_API_TOKEN');
  process.exit(1);
}

const resend = new Resend(apiKey);

const to = process.env.RESEND_TEST_TO || 'stones_aphid_0h@icloud.com';
const from = process.env.RESEND_TEST_FROM || 'onboarding@resend.dev';
const model = process.env.OPENAI_MODEL || 'gpt-5.4';
const openAiApiKey = process.env.OPENAI_API_KEY;

const trustedSources = [
  {
    name: 'Arsenal.com',
    url: 'https://www.arsenal.com/news',
  },
  {
    name: 'BBC Sport Arsenal',
    url: 'https://www.bbc.com/sport/football/teams/arsenal',
  },
  {
    name: 'Sky Sports Arsenal',
    url: 'https://www.skysports.com/arsenal',
  },
];

async function fetchSource(source) {
  const res = await fetch(source.url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; JeevesArsenalDigest/1.0)',
      'accept-language': 'en-GB,en;q=0.9',
    },
  });

  if (!res.ok) {
    throw new Error(`${source.name} fetch failed: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();
  const text = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

  return {
    ...source,
    fetchedAt: new Date().toISOString(),
    text: text.slice(0, 12000),
  };
}

function fallbackSummary(items) {
  const lines = [];
  lines.push('Arsenal daily summary');
  lines.push('');
  lines.push('Trusted sources checked:');
  for (const item of items) {
    lines.push(`- ${item.name}: ${item.url}`);
  }
  lines.push('');
  lines.push('Headline snapshot:');
  for (const item of items) {
    lines.push(`- ${item.name}: fetched successfully`);
  }
  lines.push('');
  lines.push('Note: AI summarisation was unavailable, so this is a minimal trusted-source delivery.');
  return lines.join('\n');
}

async function generateSummary(items) {
  if (!openAiApiKey) {
    return fallbackSummary(items);
  }

  const sourceBlock = items
    .map((item) => `SOURCE: ${item.name}\nURL: ${item.url}\nCONTENT:\n${item.text}`)
    .join('\n\n---\n\n');

  const prompt = `You are preparing a daily email digest about Arsenal Football Club.\n\nRules:\n- Use only the provided source material.\n- Treat Arsenal.com, BBC Sport, and Sky Sports as the only trusted sources.\n- Do not invent facts.\n- If a claim appears in only one source and looks speculative, label it clearly as speculation/reporting.\n- Focus on concrete news: fixtures, results, injuries, manager/player quotes, confirmed club updates, and clearly-labelled transfer reporting.\n- Keep it concise and readable in email form.\n- Output plain text only.\n\nFormat:\nArsenal Daily Summary — <today UTC>\n\nTop lines\n- 3 to 5 bullets\n\nWhat matters today\n- short paragraph\n\nSource notes\n- bullet list mapping key points to source names\n\nProvided sources:\n${sourceBlock}`;

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${openAiApiKey}`,
    },
    body: JSON.stringify({
      model,
      input: prompt,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`OpenAI summarisation failed: ${response.status} ${errText}`);
  }

  const data = await response.json();
  const text = data.output_text?.trim();
  if (!text) {
    throw new Error('OpenAI summarisation returned empty output');
  }

  return text;
}

try {
  const fetched = [];
  for (const source of trustedSources) {
    fetched.push(await fetchSource(source));
  }

  const summary = await generateSummary(fetched);
  const today = new Date().toISOString().slice(0, 10);
  const payload = {
    from,
    to,
    subject: `Arsenal Daily Summary — ${today}`,
    text: summary,
    html: `<pre style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; white-space: pre-wrap;">${summary
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')}</pre>`,
  };

  if (process.env.RESEND_SEND !== 'true') {
    console.log('DRY RUN: email not sent. Set RESEND_SEND=true to actually send.');
    console.log(JSON.stringify({
      to: payload.to,
      from: payload.from,
      subject: payload.subject,
      textPreview: payload.text.slice(0, 1000),
    }, null, 2));
    process.exit(0);
  }

  const result = await resend.emails.send(payload);
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.stack || error.message : error);
  process.exit(1);
}
