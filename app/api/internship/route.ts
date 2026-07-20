import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
            <h2 style="color: #0369a1; margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">New Internship Application</h2>
          </div>

          <!-- Body -->
          <div style="padding: 32px 40px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tbody>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; width: 150px; font-weight: 600; color: #4b5563;">Applicant Name:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Email:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6;">
                    <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Phone:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${phone || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">College/University:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${college}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Degree:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${degree}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Graduation Year:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${gradYear}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Skills:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${skills}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">LinkedIn:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6;">
                    <a href="${linkedin}" style="color: #0ea5e9; text-decoration: none; font-weight: 500;">View Profile</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Portfolio/GitHub:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">
                    ${portfolio ? `<a href="${portfolio}" style="color: #0ea5e9; text-decoration: none;">View Portfolio</a>` : 'Not provided'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Resume/CV:</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">
                    ${file ? 'Attached to this email' : 'Not attached'}
                  </td>
                </tr>
              </tbody>
            </table>
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
