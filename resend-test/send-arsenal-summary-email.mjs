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

const payload = {
  from,
  to,
  subject,
  text,
  html: `<pre style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; white-space: pre-wrap;">${text
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

try {
  const result = await resend.emails.send(payload);
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.stack || error.message : error);
  process.exit(1);
}
