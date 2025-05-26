import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer, { TransportOptions, SentMessageInfo } from 'nodemailer';

interface ContactFormPayload {
  senderEmail: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
} as TransportOptions);

transporter.verify((error, success) => {
  if (error) {
    console.log('Email transporter error:', error);
  } else {
    console.log('Email transporter is ready');
  }
});

export async function POST(request: NextRequest) {
  try {
    console.log('Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Missing',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Missing',
      EMAIL_TO: process.env.EMAIL_TO ? `Set: ${process.env.EMAIL_TO}` : 'Missing',
    });

    if (!process.env.EMAIL_TO) {
      console.error('EMAIL_TO environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error: EMAIL_TO not set' },
        { status: 500 }
      );
    }

    const body: ContactFormPayload = await request.json();
    const { senderEmail, message } = body;

    if (!senderEmail || !message) {
      return NextResponse.json(
        { error: 'Email and message are required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be less than 5000 characters' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.EMAIL_USER || '',
      },
      to: process.env.EMAIL_TO || 'iamsalman.dev@gmail.com',
      replyTo: senderEmail,
      subject: `New Contact Form Message from ${senderEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 10px;">Contact Details:</h3>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${senderEmail}" style="color: #007bff;">${senderEmail}</a></p>
              <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This email was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission

        From: ${senderEmail}
        Submitted: ${new Date().toLocaleString()}

        Message:
        ${message}
      `,
    };

    const info: SentMessageInfo = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });

  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
