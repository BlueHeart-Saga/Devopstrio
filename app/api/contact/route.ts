import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, selectedServices } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const smtpServer = process.env.SMTP_SERVER || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || 'sagasri143@gmail.com';
    const smtpPass = process.env.SMTP_PASS || 'jalzxmkgmmnolksa';

    // Configure nodemailer using environment variables
    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports (587 TLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Services Interested In:</strong> ${
        selectedServices && selectedServices.length > 0
          ? selectedServices.join(', ')
          : 'None selected'
      }</p>
      <h3>Message:</h3>
      <p>${message || 'No message provided'}</p>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Devopstrio Website" <${smtpUser}>`,
      to: 'Sagadevan.S@devopstrioglobal.com',
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
