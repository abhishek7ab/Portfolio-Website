import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Rate limiting store (in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 60 * 1000);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, honeypot } = await req.json();

    // Honeypot check - if filled, it's spam
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Rate limiting: max 3 submissions per IP per 15 minutes
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    const now = Date.now();
    const rateLimit = rateLimitMap.get(ip);

    if (rateLimit) {
      if (now < rateLimit.resetTime) {
        if (rateLimit.count >= 3) {
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
          );
        }
        rateLimit.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { 
          error: 'Email service key is not configured in environment variables. Please reach out directly at badaveabhishek2004@gmail.com.',
          useFallback: true 
        },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailSubject = subject ? `${subject} (from ${name})` : `New Portfolio Message from ${name}`;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'badaveabhishek2004@gmail.com',
      subject: emailSubject,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message, useFallback: true }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email', useFallback: true },
      { status: 500 }
    );
  }
}
