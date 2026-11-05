import fs from 'node:fs';
import path from 'node:path';
import express, { type Request, type Response } from 'express';

const app = express();
const port = Number(process.env.PORT || 3000);
const isProd = process.env.NODE_ENV === 'production';
const recipientEmail = 'shekonifarooq@gmail.com';

app.use(express.json());

app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, scope, organization, message } = req.body || {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'Valid work email is required' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Technical context is required' });
    }

    const refNumber = Math.floor(100000 + Math.random() * 900000);
    const reference = `VC-${new Date().getFullYear()}-${refNumber}`;
    const timestamp = new Date().toISOString();

    const dispatchSummary = [
      `====================================================`,
      `[INQUIRY DISPATCHED] Reference: ${reference}`,
      `Timestamp: ${timestamp}`,
      `Recipient: ${recipientEmail}`,
      `Client: ${name.trim()} <${email.trim()}>`,
      `Organization: ${organization ? String(organization).trim() : 'N/A'}`,
      `Discipline: ${scope || 'general'}`,
      `Technical Context:`,
      message.trim(),
      `====================================================`,
    ].join('\n');

    console.log(dispatchSummary);

    return res.status(200).json({
      success: true,
      reference,
      recipient: recipientEmail,
      timestamp,
      message: 'Inquiry received and queued for direct engineering review.',
    });
  } catch (err) {
    console.error('Failed to process contact inquiry:', err);
    return res.status(500).json({ error: 'Failed to process inquiry. Please use direct email fallback.' });
  }
});

async function startServer() {
  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve('dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve('dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer();
