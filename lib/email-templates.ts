/**
 * Devopstrio Enterprise Email Templates
 * Standardized 6-Template White-Theme HTML Email System
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://devopstrio.co.uk';
const LOGO_URL = `${SITE_URL}/logo.png`;

interface BaseEmailProps {
  title: string;
  badgeText: string;
  tableRows: Array<{ label: string; value: string; isLink?: boolean; linkUrl?: string }>;
  messageTitle?: string;
  messageContent?: string;
}

function renderBaseTemplate({ title, badgeText, tableRows, messageTitle, messageContent }: BaseEmailProps): string {
  const rowsHtml = tableRows
    .map(
      (row, idx) => `
      <tr style="background-color: ${idx % 2 === 0 ? '#ffffff' : '#fcfcfd'};">
        <td style="padding: 12px 18px; border-bottom: 1px solid #eaecf0; width: 35%; font-[family-name:sans-serif]; font-size: 13px; font-weight: 600; color: #475467; text-transform: uppercase; letter-spacing: 0.4px;">
          ${row.label}
        </td>
        <td style="padding: 12px 18px; border-bottom: 1px solid #eaecf0; font-[family-name:sans-serif]; font-size: 14px; font-weight: 500; color: #101828;">
          ${
            row.isLink && row.linkUrl
              ? `<a href="${row.linkUrl}" style="color: #0f172a; text-decoration: underline; font-weight: 600;">${row.value}</a>`
              : row.value || '<span style="color: #98a2b3; font-style: italic;">Not provided</span>'
          }
        </td>
      </tr>
    `
    )
    .join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(110deg, #4c1d95 0%, #2e1065 40%, #4c1d95 70%, #9d174d 85%, #e11d48 92%, #f97316 96%, #facc15 100%); padding: 24px 32px; border-bottom: 4px solid #e11d48;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align: middle;">
                    <img src="${LOGO_URL}" alt="Devopstrio" style="height: 38px; max-height: 42px; width: auto; display: block; border: 0;" />
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <div style="color: #ffffff; font-size: 13px; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.35; text-align: right; letter-spacing: 0.5px; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">
                      Innovate.<br/>
                      Deliver.<br/>
                      Impact.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Banner -->
          <tr>
            <td style="padding: 24px 36px 16px 36px; background-color: #ffffff; border-bottom: 1px solid #f4f4f5;">
              <div style="display: inline-block; padding: 4px 10px; background-color: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 6px; font-size: 11px; font-weight: 700; color: #3f3f46; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                ${badgeText}
              </div>
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #09090b; letter-spacing: -0.3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                ${title}
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #71717a; font-weight: 500;">
                Automated submission notification from Devopstrio Enterprise Portal
              </p>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="padding: 24px 36px; background-color: #ffffff;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border: 1px solid #eaecf0; border-radius: 10px; overflow: hidden; border-collapse: separate; border-spacing: 0;">
                <tbody>
                  ${rowsHtml}
                </tbody>
              </table>

              ${
                messageContent
                  ? `
                <div style="margin-top: 24px;">
                  <h3 style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; color: #52525b; text-transform: uppercase; letter-spacing: 0.8px;">
                    ${messageTitle || 'Details & Message'}
                  </h3>
                  <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 10px; padding: 18px 20px; color: #18181b; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${messageContent}</div>
                </div>
              `
                  : ''
              }
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #ffffff; padding: 32px 24px 0 24px; text-align: center; border-top: 1px solid #e5e7eb;">
              
              <!-- Legal Links -->
              <div style="margin-bottom: 10px; font-size: 13px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <a href="${SITE_URL}/privacy-policy" style="color: #111827; text-decoration: underline; margin: 0 8px;">Privacy Policy</a>
                <a href="${SITE_URL}/terms" style="color: #111827; text-decoration: underline; margin: 0 8px;">Terms of Service</a>
                <a href="${SITE_URL}/cookies" style="color: #111827; text-decoration: underline; margin: 0 8px;">Cookie Policy</a>
              </div>
              <div style="margin-bottom: 24px; font-size: 13px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <a href="${SITE_URL}/gdpr" style="color: #111827; text-decoration: underline; margin: 0 8px;">GDPR Compliance</a>
                <a href="${SITE_URL}/disclaimer" style="color: #111827; text-decoration: underline; margin: 0 8px;">Disclaimer</a>
              </div>

              <!-- Social Media Buttons -->
              <div style="margin-bottom: 24px; text-align: center;">
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                  <tr>
                    <td style="padding: 0 6px;">
                      <a href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 12px; border: 1.5px solid #e11d48; text-align: center; line-height: 34px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/linkedin.svg" alt="LinkedIn" width="20" height="20" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 6px;">
                      <a href="https://www.facebook.com/profile.php?id=61579126233218" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 12px; border: 1.5px solid #e11d48; text-align: center; line-height: 34px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/facebook.svg" alt="Facebook" width="20" height="20" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 6px;">
                      <a href="https://www.instagram.com/devopstrio_offcl/" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 12px; border: 1.5px solid #e11d48; text-align: center; line-height: 34px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/instagram.svg" alt="Instagram" width="20" height="20" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 6px;">
                      <a href="https://www.youtube.com/@Devopstrioltd" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 12px; border: 1.5px solid #e11d48; text-align: center; line-height: 34px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/youtube.svg" alt="YouTube" width="20" height="20" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Address & Copyright -->
              <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #111827; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                Copyright 2026 Devopstrio Ltd. All rights reserved.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 13px; color: #374151; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                We are located at 128, City Road, London, EC1V 2NX<br/>United Kingdom
              </p>

              <!-- Bottom Gradient Bar -->
              <div style="height: 10px; width: 100%; background: linear-gradient(90deg, #581c87 0%, #9d174d 40%, #e11d48 70%, #f97316 100%);"></div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// 1. Contact Form Template
export function generateContactEmailHtml(data: { name: string; email: string; phone?: string; company?: string; services?: string; message?: string }) {
  return renderBaseTemplate({
    title: 'New Contact Inquiry',
    badgeText: 'Contact Portal',
    tableRows: [
      { label: 'Full Name', value: data.name },
      { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
      { label: 'Phone Number', value: data.phone || 'Not provided' },
      { label: 'Company / Org', value: data.company || 'Not provided' },
      { label: 'Services Interested', value: data.services || 'General Inquiry' },
    ],
    messageTitle: 'Message Details',
    messageContent: data.message || 'No additional details provided.',
  });
}

// 2. Careers Contact / Job Application Template
export function generateCareerEmailHtml(data: { name: string; email: string; jobTitle: string; resume?: string; note?: string }) {
  return renderBaseTemplate({
    title: 'New Job Application',
    badgeText: 'Careers Portal',
    tableRows: [
      { label: 'Position Applied', value: data.jobTitle },
      { label: 'Applicant Name', value: data.name },
      { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
      {
        label: 'Resume / Portfolio',
        value: data.resume ? 'View Link' : 'Not provided',
        isLink: !!data.resume,
        linkUrl: data.resume,
      },
    ],
    messageTitle: 'Cover Note',
    messageContent: data.note || 'No cover note attached.',
  });
}

// 3. Internship Contact Template
export function generateInternshipEmailHtml(data: {
  fullName: string;
  email: string;
  phone?: string;
  college: string;
  degree: string;
  gradYear: string;
  skills: string;
  linkedin?: string;
  portfolio?: string;
  hasAttachment?: boolean;
}) {
  return renderBaseTemplate({
    title: 'New Internship Application',
    badgeText: 'Talent Network',
    tableRows: [
      { label: 'Applicant Name', value: data.fullName },
      { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
      { label: 'Phone Number', value: data.phone || 'Not provided' },
      { label: 'College / University', value: data.college },
      { label: 'Degree Program', value: data.degree },
      { label: 'Graduation Year', value: data.gradYear },
      { label: 'Core Skills', value: data.skills },
      { label: 'LinkedIn Profile', value: data.linkedin ? 'View Profile' : 'Not provided', isLink: !!data.linkedin, linkUrl: data.linkedin },
      { label: 'Portfolio / GitHub', value: data.portfolio ? 'View Portfolio' : 'Not provided', isLink: !!data.portfolio, linkUrl: data.portfolio },
      { label: 'CV Attachment', value: data.hasAttachment ? 'Attached to Email' : 'Not attached' },
    ],
  });
}

// 4. Schedule Call / Meeting Request Template
export function generateScheduleCallEmailHtml(data: { name: string; email: string; phone?: string; company?: string; scheduleDate: string; scheduleTime: string; topic?: string }) {
  return renderBaseTemplate({
    title: 'New Meeting Schedule Request',
    badgeText: 'Schedule Call',
    tableRows: [
      { label: 'Requester Name', value: data.name },
      { label: 'Work Email', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
      { label: 'Phone Number', value: data.phone || 'Not provided' },
      { label: 'Company / Org', value: data.company || 'Not provided' },
      { label: 'Requested Date', value: data.scheduleDate },
      { label: 'Requested Time', value: data.scheduleTime },
    ],
    messageTitle: 'Meeting Discussion Topic',
    messageContent: data.topic || 'No topic details provided.',
  });
}

// 5. Quick Contact Template
export function generateQuickContactEmailHtml(data: { name: string; email: string; message: string }) {
  return renderBaseTemplate({
    title: 'Quick Contact Submission',
    badgeText: 'Quick Support',
    tableRows: [
      { label: 'Contact Name', value: data.name },
      { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
    ],
    messageTitle: 'Quick Inquiry',
    messageContent: data.message,
  });
}

// 6. Feedback Contact Template
export function generateFeedbackEmailHtml(data: { name: string; email: string; feedback: string }) {
  return renderBaseTemplate({
    title: 'New Customer Feedback',
    badgeText: 'Feedback Widget',
    tableRows: [
      { label: 'User Name', value: data.name },
      { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
    ],
    messageTitle: 'Customer Feedback',
    messageContent: data.feedback,
  });
}
