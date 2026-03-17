import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { config } from '@/lib/config';

// Required for outbound mail delivery in production.
// Local development can still run; send failures are returned as API errors.
const resend = new Resend(process.env.RESEND_API_KEY);
const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev';
const toAddress = process.env.RESEND_TO || config.social.email;

export async function POST(request) {
  try {
    const { name, email, team, message } = await request.json();

    // Basic guardrails before external API usage.
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      reply_to: email,
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTeam of Interest: ${team || 'Not specified'}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend contact error:', error);
    return NextResponse.json({ error: 'Unable to send message right now.' }, { status: 500 });
  }
}
