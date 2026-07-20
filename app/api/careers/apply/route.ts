import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #f9fafb; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #4c1d95 0%, #312e81 100%);">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-bottom: 4px solid #0ea5e9;">
              <tr>
                <td style="padding: 24px 30px; text-align: left; vertical-align: middle;">
                  <img src="https://devopstrio.co.uk/logo.png" alt="Devopstrio" style="max-height: 40px; display: block;" />
                </td>
                <td style="padding: 24px 30px; text-align: right; vertical-align: middle;">
                  <div style="color: #ffffff; font-size: 14px; font-weight: 700; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.4; text-align: right; letter-spacing: 0.5px;">
                    Innovate.<br/>
                    Deliver.<br/>
                    Impact.
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <!-- Title Banner -->
          <div style="background-color: #f0f9ff; padding: 16px 20px; border-bottom: 1px solid #e0f2fe; text-align: center;">
            <h2 style="color: #0369a1; margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">New Job Application</h2>
            <p style="color: #0284c7; margin: 8px 0 0 0; font-size: 14px; font-weight: 600;">${jobTitle}</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 40px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tbody>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; width: 140px; font-weight: 600; color: #4b5563;">Applicant Name:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Email:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6;">
                    <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Resume/URL:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">
                    ${resume ? `<a href="${resume}" style="color: #0ea5e9; text-decoration: none;">View Resume/Portfolio</a>` : 'Not provided'}
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div style="margin-top: 32px;">
              <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 700; color: #4b5563; text-transform: uppercase; letter-spacing: 0.5px;">Cover Note</h3>
              <div style="background-color: #fafafa; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; line-height: 1.6; font-size: 15px; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">${note || 'No cover note provided'}</div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #18181b; padding: 30px; text-align: center;">
            <p style="color: #ffffff; margin: 0 0 8px 0; font-size: 15px; font-weight: 700; letter-spacing: 0.5px;">Devopstrio Engineering & Consulting</p>
            <p style="color: #a1a1aa; margin: 0; font-size: 13px; line-height: 1.6;">
              This is an automated secure message generated from the Devopstrio ecosystem.<br>
              Please do not reply directly to this notification.
            </p>
            <div style="margin-top: 20px; border-top: 1px solid #27272a; padding-top: 20px;">
              <a href="https://devopstrio.co.uk" style="color: #0ea5e9; text-decoration: none; font-size: 13px; font-weight: 600; margin: 0 12px;">Website</a>
              <span style="color: #3f3f46;">|</span>
              <a href="https://devopstrio.co.uk/privacy-policy" style="color: #0ea5e9; text-decoration: none; font-size: 13px; font-weight: 600; margin: 0 12px;">Privacy Policy</a>
            </div>
          </div>
          <!-- Bottom Brand Bar -->
          <div style="height: 8px; width: 100%; background: linear-gradient(90deg, #2e1065 0%, #9d174d 40%, #be123c 60%, #ea580c 85%, #facc15 100%);"></div>
        </div>
      </div>
    `;

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
