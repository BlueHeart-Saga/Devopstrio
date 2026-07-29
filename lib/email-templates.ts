/**
 * Devopstrio Enterprise Email Templates
 * Standardized 6-Template White-Theme HTML Email System
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://devopstrio.co.uk';
const TOP_BANNER_URL = `${SITE_URL}/topbanner.png`;
const PARTNERS_URL = `${SITE_URL}/partners.png`;

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
        <td style="padding: 12px 18px; border-bottom: 1px solid #eaecf0; width: 35%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 600; color: #475467; text-transform: uppercase; letter-spacing: 0.4px;">
          ${row.label}
        </td>
        <td style="padding: 12px 18px; border-bottom: 1px solid #eaecf0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 500; color: #101828;">
          ${
            row.isLink && row.linkUrl
              ? `<a href="${row.linkUrl}" style="color: #e11d48; text-decoration: none; font-weight: 600;">${row.value}</a>`
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
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);">
          
          <!-- Top Header Banner Image -->
          <tr>
            <td style="padding: 0; background-color: #ffffff; text-align: center; border-bottom: 3px solid #e11d48;">
              <img src="${TOP_BANNER_URL}" alt="Devopstrio Banner" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; border: 0;" />
            </td>
          </tr>

          <!-- Banner Title -->
          <tr>
            <td style="padding: 24px 36px 16px 36px; background-color: #ffffff; border-bottom: 1px solid #f4f4f5;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #fef2f2; border: 1px solid #fecdd3; border-radius: 6px; font-size: 11px; font-weight: 700; color: #e11d48; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
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

          <!-- Collaborating Partners Section -->
          <tr>
            <td style="padding: 28px 24px 20px 24px; background-color: #ffffff; text-align: center; border-top: 1px solid #f4f4f5;">
              <div style="font-size: 13px; font-weight: 700; color: #e11d48; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                COMPANIES THAT ALREADY COLLABORATE WITH US
              </div>
              <img src="${PARTNERS_URL}" alt="Collaborating Partners & Clients" style="width: 92%; max-width: 520px; height: auto; display: block; margin: 0 auto; border: 0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #ffffff; padding: 24px 0 0 0; text-align: center; border-top: 1px solid #e5e7eb;">
              
              <!-- Legal Links (clean without borders) -->
              <div style="margin-bottom: 10px; font-size: 13px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <a href="${SITE_URL}/privacy-policy" style="color: #374151; text-decoration: none; margin: 0 8px;">Privacy Policy</a>
                <a href="${SITE_URL}/terms" style="color: #374151; text-decoration: none; margin: 0 8px;">Terms of Service</a>
                <a href="${SITE_URL}/cookies" style="color: #374151; text-decoration: none; margin: 0 8px;">Cookie Policy</a>
              </div>
              <div style="margin-bottom: 24px; font-size: 13px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <a href="${SITE_URL}/gdpr" style="color: #374151; text-decoration: none; margin: 0 8px;">GDPR Compliance</a>
                <a href="${SITE_URL}/disclaimer" style="color: #374151; text-decoration: none; margin: 0 8px;">Disclaimer</a>
              </div>

              <!-- Social Media Buttons (Circular, borderless design) -->
              <div style="margin-bottom: 24px; text-align: center;">
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                  <tr>
                    <td style="padding: 0 8px;">
                      <a href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style="display: block; width: 40px; height: 40px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 40px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/linkedin.svg" alt="LinkedIn" width="20" height="20" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 8px;">
                      <a href="https://www.facebook.com/profile.php?id=61579126233218" target="_blank" rel="noopener noreferrer" style="display: block; width: 40px; height: 40px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 40px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/facebook.svg" alt="Facebook" width="20" height="20" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 8px;">
                      <a href="https://www.instagram.com/devopstrio_offcl/" target="_blank" rel="noopener noreferrer" style="display: block; width: 40px; height: 40px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 40px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/instagram.svg" alt="Instagram" width="20" height="20" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 8px;">
                      <a href="https://www.youtube.com/@Devopstrioltd" target="_blank" rel="noopener noreferrer" style="display: block; width: 40px; height: 40px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 40px; text-decoration: none;">
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
              <p style="margin: 0 0 24px 0; font-size: 13px; color: #4b5563; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                We are located at 128, City Road, London, EC1V 2NX<br/>United Kingdom
              </p>

              <!-- Bottom Gradient Bar (Full Width across container) -->
              <div style="height: 14px; width: 100%; margin: 0; padding: 0; background: linear-gradient(90deg, #581c87 0%, #9d174d 40%, #e11d48 70%, #f97316 100%);"></div>
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
  const tableRows: Array<{ label: string; value: string; isLink?: boolean; linkUrl?: string }> = [
    { label: 'Full Name', value: data.name },
    { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
  ];

  if (data.phone && data.phone.trim()) {
    tableRows.push({ label: 'Phone Number', value: data.phone, isLink: true, linkUrl: `tel:${data.phone}` });
  }
  if (data.company && data.company.trim()) {
    tableRows.push({ label: 'Company / Org', value: data.company });
  }
  if (data.services && data.services.trim()) {
    tableRows.push({ label: 'Services Interested', value: data.services });
  }

  return renderBaseTemplate({
    title: 'New Contact Inquiry',
    badgeText: 'Contact Portal',
    tableRows,
    messageTitle: 'Message Details',
    messageContent: data.message || 'No additional details provided.',
  });
}

// 2. Careers Contact / Job Application Template
export function generateCareerEmailHtml(data: { name: string; email: string; jobTitle: string; resume?: string; note?: string }) {
  const tableRows: Array<{ label: string; value: string; isLink?: boolean; linkUrl?: string }> = [
    { label: 'Position Applied', value: data.jobTitle },
    { label: 'Applicant Name', value: data.name },
    { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
  ];

  if (data.resume && data.resume.trim()) {
    tableRows.push({ label: 'Resume / Portfolio', value: 'View Link', isLink: true, linkUrl: data.resume });
  }

  return renderBaseTemplate({
    title: 'New Job Application',
    badgeText: 'Careers Portal',
    tableRows,
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
  const tableRows: Array<{ label: string; value: string; isLink?: boolean; linkUrl?: string }> = [
    { label: 'Applicant Name', value: data.fullName },
    { label: 'Email Address', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
  ];

  if (data.phone && data.phone.trim()) {
    tableRows.push({ label: 'Phone Number', value: data.phone, isLink: true, linkUrl: `tel:${data.phone}` });
  }
  tableRows.push(
    { label: 'College / University', value: data.college },
    { label: 'Degree Program', value: data.degree },
    { label: 'Graduation Year', value: data.gradYear },
    { label: 'Core Skills', value: data.skills }
  );

  if (data.linkedin && data.linkedin.trim()) {
    tableRows.push({ label: 'LinkedIn Profile', value: 'View Profile', isLink: true, linkUrl: data.linkedin });
  }
  if (data.portfolio && data.portfolio.trim()) {
    tableRows.push({ label: 'Portfolio / GitHub', value: 'View Portfolio', isLink: true, linkUrl: data.portfolio });
  }
  tableRows.push({ label: 'CV Attachment', value: data.hasAttachment ? 'Attached to Email' : 'Not attached' });

  return renderBaseTemplate({
    title: 'New Internship Application',
    badgeText: 'Talent Network',
    tableRows,
  });
}

// 4. Schedule Call / Meeting Request Template
export function generateScheduleCallEmailHtml(data: { name: string; email: string; phone?: string; company?: string; scheduleDate: string; scheduleTime: string; topic?: string }) {
  const tableRows: Array<{ label: string; value: string; isLink?: boolean; linkUrl?: string }> = [
    { label: 'Requester Name', value: data.name },
    { label: 'Work Email', value: data.email, isLink: true, linkUrl: `mailto:${data.email}` },
  ];

  if (data.phone && data.phone.trim()) {
    tableRows.push({ label: 'Phone Number', value: data.phone, isLink: true, linkUrl: `tel:${data.phone}` });
  }
  if (data.company && data.company.trim()) {
    tableRows.push({ label: 'Company / Org', value: data.company });
  }
  tableRows.push(
    { label: 'Requested Date', value: data.scheduleDate },
    { label: 'Requested Time', value: data.scheduleTime }
  );

  return renderBaseTemplate({
    title: 'New Meeting Schedule Request',
    badgeText: 'Schedule Call',
    tableRows,
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

// 7. Executive Thank You Auto-Reply Template (Sent automatically to submitters)
export interface ThankYouEmailProps {
  name: string;
  formType: 'Contact Inquiry' | 'Feedback' | 'Meeting Schedule' | 'Internship Application' | 'Job Application' | 'General Inquiry';
  referenceDetails?: Array<{ label: string; value: string }>;
}

export function generateThankYouEmailHtml({ name, formType, referenceDetails }: ThankYouEmailProps): string {
  const customMessage = {
    'Contact Inquiry': 'Thank you for reaching out to Devopstrio Ltd. Our enterprise technology team has received your message and will review your inquiry shortly.',
    'Feedback': 'Thank you for providing your feedback to Devopstrio Ltd. Your input helps us continuously improve our enterprise software, cloud, and AI solutions.',
    'Meeting Schedule': 'Thank you for scheduling a discovery call with Devopstrio Ltd. Our solutions team has logged your preferred schedule and will confirm meeting coordinates with you shortly.',
    'Internship Application': 'Thank you for submitting your internship application to Devopstrio Ltd. Our talent acquisition team will evaluate your profile against our open positions.',
    'Job Application': 'Thank you for applying for a career opportunity with Devopstrio Ltd. Our hiring team is currently reviewing applications and will reach out if your experience matches our technical requirements.',
    'General Inquiry': 'Thank you for contacting Devopstrio Ltd. We have received your submission and will get back to you as soon as possible.',
  }[formType] || 'Thank you for contacting Devopstrio Ltd. We have received your submission.';

  const referenceRowsHtml = referenceDetails && referenceDetails.length > 0
    ? referenceDetails.map((row, idx) => `
      <tr style="background-color: ${idx % 2 === 0 ? '#ffffff' : '#fcfcfd'};">
        <td style="padding: 10px 16px; border-bottom: 1px solid #eaecf0; width: 35%; font-size: 12px; font-weight: 600; color: #475467; text-transform: uppercase;">
          ${row.label}
        </td>
        <td style="padding: 10px 16px; border-bottom: 1px solid #eaecf0; font-size: 13px; font-weight: 500; color: #101828;">
          ${row.value || 'Provided'}
        </td>
      </tr>
    `).join('')
    : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Devopstrio</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);">
          
          <!-- Top Header Banner Image -->
          <tr>
            <td style="padding: 0; background-color: #ffffff; text-align: center; border-bottom: 3px solid #e11d48;">
              <img src="${TOP_BANNER_URL}" alt="Devopstrio Banner" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; border: 0;" />
            </td>
          </tr>

          <!-- Thank You Message Body -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; background-color: #ffffff;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #fef2f2; border: 1px solid #fecdd3; border-radius: 20px; font-size: 11px; font-weight: 700; color: #e11d48; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                CONFIRMATION RECEIPT
              </div>
              <h1 style="margin: 0 0 10px 0; font-size: 22px; font-weight: 800; color: #09090b; letter-spacing: -0.4px;">
                Thank You, ${name}!
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #3f3f46; line-height: 1.6; font-weight: 400;">
                ${customMessage}
              </p>

              <div style="background-color: #fafafa; border: 1px solid #f4f4f5; border-left: 4px solid #e11d48; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 700; color: #09090b;">
                  What Happens Next?
                </p>
                <p style="margin: 0; font-size: 13px; color: #52525b; line-height: 1.5;">
                  A specialist from our team usually responds within <strong>24 business hours</strong>. If your request is urgent, you can also connect with us directly via email or WhatsApp.
                </p>
              </div>

              ${referenceRowsHtml ? `
                <div style="margin-top: 20px; margin-bottom: 20px;">
                  <h3 style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; color: #71717a; text-transform: uppercase; letter-spacing: 0.8px;">
                    Submission Summary
                  </h3>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border: 1px solid #eaecf0; border-radius: 10px; overflow: hidden; border-collapse: separate; border-spacing: 0;">
                    <tbody>
                      ${referenceRowsHtml}
                    </tbody>
                  </table>
                </div>
              ` : ''}

              <!-- Direct Action Buttons -->
              <div style="padding-top: 10px; margin-bottom: 10px;">
                <a href="${SITE_URL}/services" style="display: inline-block; padding: 12px 24px; background: linear-gradient(90deg, #e11d48 0%, #be123c 100%); color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 10px; margin-bottom: 8px;">
                  Explore Our Services &rarr;
                </a>
                <a href="${SITE_URL}/about" style="display: inline-block; padding: 12px 24px; background-color: #f4f4f5; color: #18181b; text-decoration: none; font-size: 13px; font-weight: 700; border-radius: 8px; border: 1px solid #e4e4e7; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Learn About Devopstrio
                </a>
              </div>
            </td>
          </tr>

          <!-- Collaborating Partners Section -->
          <tr>
            <td style="padding: 28px 24px 20px 24px; background-color: #ffffff; text-align: center; border-top: 1px solid #f4f4f5;">
              <div style="font-size: 13px; font-weight: 700; color: #e11d48; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                COMPANIES THAT ALREADY COLLABORATE WITH US
              </div>
              <img src="${PARTNERS_URL}" alt="Collaborating Partners & Clients" style="width: 92%; max-width: 520px; height: auto; display: block; margin: 0 auto; border: 0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #ffffff; padding: 24px 0 0 0; text-align: center; border-top: 1px solid #e5e7eb;">
              <!-- Legal Links (clean without borders) -->
              <div style="margin-bottom: 10px; font-size: 12px; font-weight: 500;">
                <a href="${SITE_URL}/privacy-policy" style="color: #374151; text-decoration: none; margin: 0 8px;">Privacy Policy</a>
                <a href="${SITE_URL}/terms" style="color: #374151; text-decoration: none; margin: 0 8px;">Terms of Service</a>
                <a href="${SITE_URL}/cookies" style="color: #374151; text-decoration: none; margin: 0 8px;">Cookie Policy</a>
              </div>
              <div style="margin-bottom: 20px; font-size: 12px; font-weight: 500;">
                <a href="${SITE_URL}/gdpr" style="color: #374151; text-decoration: none; margin: 0 8px;">GDPR Compliance</a>
                <a href="${SITE_URL}/disclaimer" style="color: #374151; text-decoration: none; margin: 0 8px;">Disclaimer</a>
              </div>

              <!-- Social Media Buttons (Circular, borderless design) -->
              <div style="margin-bottom: 20px; text-align: center;">
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                  <tr>
                    <td style="padding: 0 8px;">
                      <a href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 38px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/linkedin.svg" alt="LinkedIn" width="18" height="18" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 8px;">
                      <a href="https://www.facebook.com/profile.php?id=61579126233218" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 38px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/facebook.svg" alt="Facebook" width="18" height="18" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 8px;">
                      <a href="https://www.instagram.com/devopstrio_offcl/" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 38px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/instagram.svg" alt="Instagram" width="18" height="18" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                    <td style="padding: 0 8px;">
                      <a href="https://www.youtube.com/@Devopstrioltd" target="_blank" rel="noopener noreferrer" style="display: block; width: 38px; height: 38px; border-radius: 50%; background-color: #fef2f2; text-align: center; line-height: 38px; text-decoration: none;">
                        <img src="${SITE_URL}/assets/social-icons/youtube.svg" alt="YouTube" width="18" height="18" style="vertical-align: middle; border: 0;" />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #111827;">
                Copyright 2026 Devopstrio Ltd. All rights reserved.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 12px; color: #374151;">
                128, City Road, London, EC1V 2NX, United Kingdom
              </p>

              <!-- Bottom Gradient Bar (Full Width across container) -->
              <div style="height: 12px; width: 100%; margin: 0; padding: 0; background: linear-gradient(90deg, #581c87 0%, #9d174d 40%, #e11d48 70%, #f97316 100%);"></div>
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
