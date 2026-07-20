import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateInternshipEmailHtml } from '@/lib/email-templates';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const college = formData.get('college') as string;
    const degree = formData.get('degree') as string;
    const gradYear = formData.get('gradYear') as string;
    const skills = formData.get('skills') as string;
    const linkedin = formData.get('linkedin') as string;
    const portfolio = formData.get('portfolio') as string;
    const file = formData.get('resume') as File | null;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
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

    const htmlContent = generateInternshipEmailHtml({
      fullName,
      email,
      phone,
      college,
      degree,
      gradYear,
      skills,
      linkedin,
      portfolio,
      hasAttachment: !!file,
    });

    const attachments: any[] = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    await transporter.sendMail({
      from: `"Devopstrio Internship" <${smtpUser}>`,
      to: process.env.NEXT_PUBLIC_INTERNSHIP_EMAIL || 'internship@devopstrioglobal.com',
      replyTo: email,
      subject: `Internship Application: ${fullName}`,
      html: htmlContent,
      attachments: attachments,
    });

    return NextResponse.json(
      { success: true, message: 'Application sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending application email:', error);
    return NextResponse.json(
      { error: 'Failed to send application' },
      { status: 500 }
    );
  }
}
