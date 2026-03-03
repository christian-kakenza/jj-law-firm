import { NextRequest, NextResponse } from 'next/server';
import { reservationSchema } from '@/lib/validation';
import { transporter, CABINET_EMAIL, FROM_SITE, FROM_CONTACT } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';
import { escapeHtml } from '@/lib/sanitize';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const body = await request.json();
  const result = reservationSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const data = result.data;
  const clientFullName = escapeHtml(`${data.firstname} ${data.lastname} ${data.middlename || ''}`.trim());
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const address = escapeHtml(data.address);
  const date = escapeHtml(data.date);
  const time = escapeHtml(data.time);
  const note = escapeHtml(data.note || '');

  try {
    // Email to cabinet
    await transporter.sendMail({
      from: FROM_SITE,
      to: CABINET_EMAIL,
      subject: `Nouvelle reservation - ${clientFullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B0000;">Nouvelle demande de rendez-vous</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #8B0000;">
            <p><strong style="color: #333;">Client :</strong> ${clientFullName}</p>
            <p><strong style="color: #333;">Email :</strong> ${email}</p>
            <p><strong style="color: #333;">Telephone :</strong> ${phone}</p>
            <p><strong style="color: #333;">Adresse :</strong> ${address}</p>
            <p><strong style="color: #333;">Date souhaitee :</strong> ${date}</p>
            <p><strong style="color: #333;">Heure :</strong> ${time}</p>
            <p><strong style="color: #333;">Message :</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px;">${note}</p>
          </div>
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 0.9em;">
            Message envoye depuis le site web J&J Law Firm<br>
            Date d'envoi : ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      `,
    });

    // Confirmation email to client
    if (data.email) {
      await transporter.sendMail({
        from: FROM_CONTACT,
        to: data.email,
        subject: 'Confirmation de votre reservation - J&J Law Firm',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B0000;">Bonjour ${clientFullName},</h2>
            <p>Nous avons bien recu votre demande de rendez-vous.</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #333;">Details de votre reservation :</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 10px 0;"><strong>Nom complet :</strong> ${clientFullName}</li>
                <li style="margin: 10px 0;"><strong>Date souhaitee :</strong> ${date}</li>
                <li style="margin: 10px 0;"><strong>Heure :</strong> ${time}</li>
                <li style="margin: 10px 0;"><strong>Telephone :</strong> ${phone}</li>
                <li style="margin: 10px 0;"><strong>Adresse :</strong> ${address}</li>
                <li style="margin: 10px 0;"><strong>Votre message :</strong><br>${note}</li>
              </ul>
            </div>
            <p><strong>Etapes suivantes :</strong></p>
            <ol>
              <li>Notre equipe va analyser votre demande</li>
              <li>Nous vous contacterons dans les <strong>24 heures</strong> pour confirmer</li>
              <li>Preparez les documents relatifs a votre dossier</li>
            </ol>
            <p style="color: #666; font-size: 0.9em; margin-top: 30px;">
              Ceci est un message automatique de confirmation.
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
