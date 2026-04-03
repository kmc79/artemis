import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_TOKEN;
if (!apiKey) {
  console.error('Missing RESEND_API_TOKEN');
  process.exit(1);
}

const resend = new Resend(apiKey);

const to = process.env.RESEND_TEST_TO || 'stones_aphid_0h@icloud.com';
const from = process.env.RESEND_TEST_FROM || 'onboarding@resend.dev';
const subject = process.env.ARSENAL_SUMMARY_SUBJECT || `Arsenal Daily Summary — ${new Date().toISOString().slice(0, 10)}`;
const text = process.env.ARSENAL_SUMMARY_TEXT;

if (!text) {
  console.error('Missing ARSENAL_SUMMARY_TEXT');
  process.exit(1);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function textToHtmlSections(input) {
  const escaped = escapeHtml(input);
  const paragraphs = escaped.split(/\n\s*\n/).filter(Boolean);

  return paragraphs
    .map((block) => {
      const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
      if (!lines.length) return '';

      const first = lines[0];
      const rest = lines.slice(1);
      const isHeading = !first.startsWith('- ') && !first.startsWith('* ') && rest.length > 0;
      const bulletLines = rest.length ? rest.every((line) => line.startsWith('- ') || line.startsWith('* ')) : lines.every((line) => line.startsWith('- ') || line.startsWith('* '));

      if (isHeading && bulletLines) {
        const bullets = rest.map((line) => `<li>${line.replace(/^[-*]\s+/, '')}</li>`).join('');
        return `<section style="margin: 0 0 20px;"><h2 style="font-size: 16px; margin: 0 0 10px;">${first}</h2><ul style="margin: 0; padding-left: 20px;">${bullets}</ul></section>`;
      }

      if (lines.every((line) => line.startsWith('- ') || line.startsWith('* '))) {
        const bullets = lines.map((line) => `<li>${line.replace(/^[-*]\s+/, '')}</li>`).join('');
        return `<ul style="margin: 0 0 20px; padding-left: 20px;">${bullets}</ul>`;
      }

      if (isHeading) {
        return `<section style="margin: 0 0 20px;"><h2 style="font-size: 16px; margin: 0 0 10px;">${first}</h2><p style="margin: 0; line-height: 1.5;">${rest.join('<br><br>')}</p></section>`;
      }

      return `<p style="margin: 0 0 16px; line-height: 1.5;">${lines.join('<br>')}</p>`;
    })
    .join('');
}

const payload = {
  from,
  to,
  subject,
  text,
  html: `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: #111827; max-width: 720px; margin: 0 auto; padding: 24px;">
      <div style="margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb;">
        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 6px;">Jeeves Daily Digest</div>
        <h1 style="font-size: 24px; margin: 0;">${escapeHtml(subject)}</h1>
      </div>
      ${textToHtmlSections(text)}
    </div>
  `,
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

try {
  const result = await resend.emails.send(payload);
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.stack || error.message : error);
  process.exit(1);
}
