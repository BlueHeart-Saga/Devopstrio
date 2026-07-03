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

    // Configure nodemailer with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'Sagadevan.S@devopstrioglobal.com',
        pass: 'sagadevanapp',
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
      from: '"Devopstrio Website" <Sagadevan.S@devopstrioglobal.com>',
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
