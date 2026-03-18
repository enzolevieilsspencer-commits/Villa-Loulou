import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function toArray(value) {
  if (!value || typeof value !== 'string') return [];
  return value.split(',').map((s) => s.trim()).filter(Boolean);
}

function escapeHtml(str) {
  if (str == null) return '';
  const s = String(str);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildEmailHtml(data) {
  const { nom, email, telephone, dates, date_arrivee, date_depart, voyageurs, message } = data;
  const siteUrl = (() => {
    const from = process.env.RESEND_FROM || '';
    const domain = from.includes('@') ? from.split('@')[1] : '';
    return domain ? `https://${domain}` : 'https://villa-loulou.com';
  })();
  const logoPath = process.env.CONTACT_EMAIL_LOGO_PATH || '/images/logo-tortue.png';
  const logoUrl = `${siteUrl}${logoPath}`;
  const row = (label, value) =>
    value
      ? `
    <tr>
      <td style="padding: 8px 0 4px; font-size: 12px; color: #5c534a; text-transform: uppercase; letter-spacing: 0.06em;">${escapeHtml(label)}</td>
    </tr>
    <tr>
      <td style="padding: 0 0 16px; font-size: 16px; color: #2c2520;">${escapeHtml(value)}</td>
    </tr>`
      : '';

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau message — Villa Loulou</title>
</head>
<body style="margin: 0; padding: 0; background-color: #e8e0d5; font-family: Georgia, 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #e8e0d5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto;">
          <!-- En-tête -->
          <tr>
            <td style="background-color: #b8543a; padding: 28px 32px; border-radius: 12px 12px 0 0; text-align: center;">
              <img
                src="${logoUrl}"
                alt="Logo tortue"
                width="56"
                height="56"
                style="display: block; margin: 0 auto 10px auto; border-radius: 12px;"
              />
              <p style="margin: 0; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.9); font-weight: 300;">Villa</p>
              <p style="margin: 4px 0 0; font-size: 26px; letter-spacing: 0.05em; color: #f5f1eb; font-weight: 400;">Loulou</p>
              <p style="margin: 12px 0 0; font-size: 13px; color: rgba(255,255,255,0.85);">Nouveau message depuis le site</p>
            </td>
          </tr>
          <!-- Corps -->
          <tr>
            <td style="background-color: #f5f1eb; padding: 28px 32px; border: 1px solid #e8e0d5; border-top: none; border-radius: 0 0 12px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row('Nom', nom)}
                ${row('Email', email)}
                ${row('Téléphone', telephone)}
                ${row('Dates de séjour', dates)}
                ${row('Nombre de voyageurs', voyageurs)}
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 8px;">
                <tr>
                  <td style="padding: 8px 0 4px; font-size: 12px; color: #5c534a; text-transform: uppercase; letter-spacing: 0.06em;">Message</td>
                </tr>
                <tr>
                  <td style="padding: 16px; background-color: #e8e0d5; border-radius: 8px; border-left: 4px solid #b8543a; font-size: 15px; color: #2c2520; line-height: 1.6;">${escapeHtml(message)}</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Pied -->
          <tr>
            <td style="padding: 20px 32px 0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #5c534a;">Villa Loulou — Marrakech</p>
              <p style="margin: 4px 0 0; font-size: 11px; color: #9a4532;">Villa de charme · Piscine · Hammam · Beldi Country Club</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.status(405).json({ success: false });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  const { nom, email, telephone, date_arrivee, date_depart, dates, voyageurs, message, website } = body || {};

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM || !process.env.RESEND_TO) {
    console.error('Missing RESEND_API_KEY, RESEND_FROM or RESEND_TO');
    res.status(500).json({ success: false });
    return;
  }

  if (!nom || !email || !message) {
    res.status(400).json({ success: false });
    return;
  }

  if (website) {
    res.status(200).json({ success: true });
    return;
  }

  const to = toArray(process.env.RESEND_TO);
  if (to.length === 0) {
    res.status(500).json({ success: false });
    return;
  }

  const from = process.env.RESEND_FROM;
  const subject =
    dates
      ? `Demande de réservation — ${dates} — ${nom}`
      : `[Villa Loulou] Message de ${nom}`;
  const lines = [
    `Nom : ${nom}`,
    `Email : ${email}`,
    telephone ? `Téléphone : ${telephone}` : null,
    dates ? `Dates : ${dates}` : null,
    voyageurs ? `Voyageurs : ${voyageurs}` : null,
    '',
    'Message :',
    message,
  ].filter(Boolean);
  const text = lines.join('\n');
  const html = buildEmailHtml({
    nom,
    email,
    telephone,
    dates,
    date_arrivee,
    date_depart,
    voyageurs,
    message,
  });

  const { data, error } = await resend.emails.send({
    from: from.includes('<') ? from : `Villa Loulou <${from}>`,
    to,
    subject,
    html,
    text,
  });

  if (error) {
    console.error('Resend error:', error);
    const message = error?.message || (typeof error === 'string' ? error : 'Envoi refusé');
    res.status(500).json({ success: false, message });
    return;
  }

  res.status(200).json({ success: true, id: data?.id });
}
