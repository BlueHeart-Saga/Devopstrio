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
      <h2>New Internship Application</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>College/University:</strong> ${college}</p>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Graduation Year:</strong> ${gradYear}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>LinkedIn:</strong> ${linkedin}</p>
      <p><strong>Portfolio/GitHub:</strong> ${portfolio || 'Not provided'}</p>
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
      from: '"Devopstrio Internship" <Sagadevan.S@devopstrioglobal.com>',
      to: 'Sagadevan.S@devopstrioglobal.com',
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
