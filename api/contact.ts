// Vercel serverless function: emails contact form submissions through Resend.
// Needs three environment variables in Vercel (Project → Settings → Environment Variables):
//   RESEND_API_KEY  your Resend API key
//   CONTACT_TO      where messages go, e.g. evan@foolsflagon.com
//   CONTACT_FROM    a sender on a domain verified in Resend, e.g. "Fools Flagon <contact@foolsflagon.com>"
// Without them this returns 503 and the site falls back to opening the visitor's email app.

declare const process: { env: Record<string, string | undefined> };

interface Req {
  method?: string;
  body?: unknown;
}
interface Res {
  status(code: number): Res;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export default async function handler(req: Req, res: Res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!key || !to || !from) return res.status(503).json({ error: 'Contact form is not configured' });

  let body: Record<string, unknown> = {};
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as Record<string, unknown>;
  } catch {
    return res.status(400).json({ error: 'Invalid request' });
  }

  // Honeypot: real visitors never see or fill this field.
  if (str(body.company, 200)) return res.status(200).json({ ok: true });

  const name = str(body.name, 200);
  const email = str(body.email, 320);
  const reason = str(body.reason, 100) || 'Message';
  const message = str(body.message, 5000);
  if (!name || !message || !EMAIL.test(email)) return res.status(400).json({ error: 'Missing or invalid fields' });

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Portfolio] ${reason} - ${name}`,
      text: `${message}\n\n${name}\n${email}`,
    }),
  });

  if (!r.ok) return res.status(502).json({ error: 'Email service error' });
  return res.status(200).json({ ok: true });
}
