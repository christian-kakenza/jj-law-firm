import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';
import { transporter, CABINET_EMAIL, FROM_SITE } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';
import { escapeHtml } from '@/lib/sanitize';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const body = await request.json();
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const data = result.data;

  try {
    await transporter.sendMail({
      from: FROM_SITE,
      to: CABINET_EMAIL,
      subject: `Nouveau message - ${escapeHtml(data.subject)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B0000;">Nouveau message de contact</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #8B0000;">
            <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Sujet :</strong> ${escapeHtml(data.subject)}</p>
            <p><strong>Message :</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px;">${escapeHtml(data.message)}</p>
          </div>
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 0.9em;">
            Message envoye depuis le site web J&J Law Firm<br>
            Date : ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
