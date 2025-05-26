'use server';

import nodemailer from 'nodemailer';

interface SendEmailResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

// Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(formData: FormData): Promise<SendEmailResponse> {
  try {
    const senderEmail = formData.get('senderEmail') as string;
    const message = formData.get('message') as string;

    if (!senderEmail || !message) {
      return { error: 'Email and message are required fields' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      return { error: 'Please enter a valid email address' };
    }

    if (message.length < 10 || message.length > 5000) {
      return { error: 'Message must be between 10 and 5000 characters' };
    }

    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.EMAIL_USER || '',
      },
      to: process.env.EMAIL_TO || '',
      replyTo: senderEmail,
      subject: `New Contact Form Message from ${senderEmail}`,
      html: `<h2>New Contact Form Submission</h2>
             <p><strong>From:</strong> ${senderEmail}</p>
             <p><strong>Message:</strong> ${message}</p>`,
      text: `New message from: ${senderEmail}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: 'Failed to send email. Please try again later.' };
  }
}
