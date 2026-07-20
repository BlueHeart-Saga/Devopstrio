import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateCareerEmailHtml } from '@/lib/email-templates';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, resume, note, jobTitle } = body;

    if (!name || !email || !jobTitle) {
      return NextResponse.json(
        { error: 'Name, email, and job title are required' },
        { status: 400 }
      );
    }

    const smtpServer = process.env.SMTP_SERVER || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || 'sagasri143@gmail.com';
    const smtpPass = process.env.SMTP_PASS || 'jalzxmkgmmnolksa';

    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = generateCareerEmailHtml({
      name,
      email,
      jobTitle,
      resume,
      note,
    });

    await transporter.sendMail({
      from: `"Devopstrio Careers" <${smtpUser}>`,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@devopstrioglobal.com',
      replyTo: email,
      subject: `Job Application for ${jobTitle}: ${name}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: 'Application sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending job application email:', error);
    return NextResponse.json(
      { error: 'Failed to send application' },
      { status: 500 }
    );
  }
}
