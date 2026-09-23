import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateCareerEmailHtml, generateThankYouEmailHtml } from '@/lib/email-templates';
import { createStoredApplication } from '@/lib/applicationsStore';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, resume, note, portfolio, jobTitle, location, type, experience } = body;

    if (!name || !email || !jobTitle) {
      return NextResponse.json(
        { error: 'Name, email, and job title are required' },
        { status: 400 }
      );
    }

    // Record application in storage (local JSON file + MongoDB)
    try {
      await createStoredApplication({
        name,
        email,
        phone: phone || "",
        jobTitle,
        location: location || "",
        type: type || "",
        experience: experience || "",
        resume: resume || "",
        portfolio: portfolio || "",
        note: note || "",
        status: "new"
      });
    } catch (storeErr) {
      console.warn("Application recording warning:", storeErr);
    }

    const smtpServer = process.env.SMTP_SERVER || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || 'devopstrioglobal@gmail.com';
    const smtpPass = process.env.SMTP_PASS || 'rvaanwlmdcixyvbx';

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
      phone,
      jobTitle,
      location,
      type,
      experience,
      resume,
      portfolio,
      note,
    });

    // 1 & 2. Send Admin Notification & Automatic Thank You Auto-Reply Concurrently
    const thankYouHtml = generateThankYouEmailHtml({
      name,
      formType: 'Job Application',
      referenceDetails: [
        { label: 'Position Applied', value: jobTitle },
        ...(location ? [{ label: 'Location', value: location }] : []),
        ...(type ? [{ label: 'Employment Type', value: type }] : []),
        ...(experience ? [{ label: 'Experience Level', value: experience }] : []),
        { label: 'Applicant Name', value: name },
        { label: 'Applicant Email', value: email },
        ...(phone ? [{ label: 'Contact Phone', value: phone }] : [])
      ],
    });

    const results = await Promise.allSettled([
      transporter.sendMail({
        from: `"Devopstrio Careers" <${smtpUser}>`,
        to: 'career@devopstrioglobal.com',
        replyTo: email,
        subject: `Job Application for ${jobTitle}: ${name}`,
        html: htmlContent,
      }),
      transporter.sendMail({
        from: `"Devopstrio Careers" <${smtpUser}>`,
        to: email,
        replyTo: 'info@devopstrioglobal.com',
        subject: `Application Confirmation: ${jobTitle} at Devopstrio`,
        html: thankYouHtml,
      }),
    ]);

    results.forEach((res, idx) => {
      if (res.status === 'rejected') {
        console.warn(`Career email dispatch #${idx + 1} issue:`, res.reason);
      }
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
