import { NextRequest, NextResponse } from 'next/server';
import { faqQuestionSchema } from '@/lib/validation';
import { transporter, CABINET_EMAIL, FROM_SITE, FROM_CONTACT } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';
import { escapeHtml } from '@/lib/sanitize';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const body = await request.json();
  const result = faqQuestionSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const data = result.data;

  try {
    // Email to cabinet
    await transporter.sendMail({
      from: FROM_SITE,
      to: CABINET_EMAIL,
      subject: `Nouvelle question FAQ - ${escapeHtml(data.name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B0000;">Nouvelle question FAQ</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #8B0000;">
            <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Telephone :</strong> ${escapeHtml(data.phone)}</p>
            <p><strong>Question :</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px;">${escapeHtml(data.message)}</p>
          </div>
        </div>
      `,
    });

    // Confirmation to client
    await transporter.sendMail({
      from: FROM_CONTACT,
      to: data.email,
      subject: 'Nous avons recu votre question - J&J Law Firm',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B0000;">Bonjour ${escapeHtml(data.name)},</h2>
          <p>Nous avons bien recu votre question et nous vous repondrons dans les <strong>48 heures</strong>.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Votre question :</strong></p>
            <p>${escapeHtml(data.message)}</p>
          </div>
          <p style="color: #666; font-size: 0.9em;">
            Ceci est un message automatique. Ne repondez pas a cet email.
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
