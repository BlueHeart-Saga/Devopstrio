import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  generateContactEmailHtml,
  generateScheduleCallEmailHtml,
  generateQuickContactEmailHtml,
  generateFeedbackEmailHtml,
  generateThankYouEmailHtml,
  ThankYouEmailProps,
} from '@/lib/email-templates';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message, selectedServices, toEmail } = await req.json();

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
      secure: smtpPort === 465, // true for 465, false for 587 TLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const isSchedule = selectedServices?.includes("SCHEDULE_CALL");
    const isFeedback = selectedServices?.includes("FEEDBACK");
    const isQuickContact = selectedServices?.includes("QUICK_CONTACT");

    const servicesList = selectedServices && selectedServices.length > 0
      ? selectedServices.join(', ')
      : 'General Inquiry';

    let htmlContent = '';
    let emailSubject = `New Contact Request from ${name}`;
    let thankYouFormType: ThankYouEmailProps['formType'] = 'Contact Inquiry';

    if (isSchedule) {
      // Extract date, time, and company if embedded in message text
      const dateMatch = message?.match(/Requested call on ([\d-]+) at ([\d:]+)/);
      const companyMatch = message?.match(/Company:\s*([^.]+)\./);
      
      const scheduleDate = dateMatch ? dateMatch[1] : 'Date requested';
      const scheduleTime = dateMatch ? dateMatch[2] : 'Time requested';
      const parsedCompany = company || (companyMatch ? companyMatch[1] : '');
      
      htmlContent = generateScheduleCallEmailHtml({
        name,
        email,
        phone,
        company: parsedCompany,
        scheduleDate,
        scheduleTime,
        topic: message,
      });
      emailSubject = `Meeting Schedule Request: ${name}`;
      thankYouFormType = 'Meeting Schedule';
    } else if (isFeedback) {
      htmlContent = generateFeedbackEmailHtml({
        name,
        email,
        feedback: message || '',
      });
      emailSubject = `Customer Feedback Submission: ${name}`;
      thankYouFormType = 'Feedback';
    } else if (isQuickContact) {
      htmlContent = generateQuickContactEmailHtml({
        name,
        email,
        message: message || '',
      });
      emailSubject = `Quick Support Inquiry: ${name}`;
      thankYouFormType = 'General Inquiry';
    } else {
      htmlContent = generateContactEmailHtml({
        name,
        email,
        phone,
        services: servicesList,
        message,
      });
    }

    // 1. Send Admin Notification Email
    await transporter.sendMail({
      from: `"Devopstrio Website" <${smtpUser}>`,
      to: toEmail || process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@devopstrioglobal.com',
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
    });

    // 2. Send Automatic Thank You Confirmation Email to Submitter
    try {
      const thankYouHtml = generateThankYouEmailHtml({
        name,
        formType: thankYouFormType,
        referenceDetails: [
          { label: 'Form Category', value: thankYouFormType },
          { label: 'Submitted Email', value: email },
          ...(phone ? [{ label: 'Contact Phone', value: phone }] : []),
        ],
      });

      await transporter.sendMail({
        from: `"Devopstrio Team" <${smtpUser}>`,
        to: email,
        subject: `Thank you for contacting Devopstrio - Confirmation`,
        html: thankYouHtml,
      });
    } catch (autoReplyError) {
      console.warn('Failed to send thank-you auto-reply email:', autoReplyError);
    }

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
