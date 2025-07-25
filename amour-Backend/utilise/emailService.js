// utils/emailService.js
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

// Create transporter with better error handling
const createTransporter = () => {
  const config = {
    service: "gmail", // You can also use 'Outlook', 'Zoho', or custom SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use App Password for Gmail
    },
    // Additional security options
    secure: true, // Use TLS
    tls: {
      rejectUnauthorized: false,
    },
  };

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error(
      "Email configuration missing: EMAIL_USER and EMAIL_PASS must be set in environment variables"
    );
    throw new Error("Email service not configured properly");
  }

  if (!process.env.EMAIL_RECEIVER) {
    console.warn("EMAIL_RECEIVER not set, using EMAIL_USER as fallback");
  }

  return nodemailer.createTransport(config);
};

let transporter;
try {
  transporter = createTransporter();
} catch (error) {
  console.error("Failed to create email transporter:", error.message);
}

// Test email configuration on startup
const testEmailConnection = async () => {
  if (!transporter) return false;

  try {
    await transporter.verify();
    console.log("✅ Email service is ready and configured correctly");
    return true;
  } catch (error) {
    console.error("❌ Email service configuration error:", error.message);
    return false;
  }
};

// Initialize email service
testEmailConnection();

const sendEmail = async ({ subject, html, attachments = [] }) => {
  if (!transporter) {
    throw new Error(
      "Email service is not configured. Please check your environment variables."
    );
  }

  // Validate inputs
  if (!subject || !html) {
    throw new Error("Subject and HTML content are required");
  }

  // Validate attachments if provided
  if (attachments && attachments.length > 0) {
    for (const attachment of attachments) {
      if (!attachment.filename || !attachment.path) {
        throw new Error(
          "Invalid attachment format. Filename and path are required."
        );
      }

      // Check if file exists
      const fs = require("fs");
      if (!fs.existsSync(attachment.path)) {
        throw new Error(`Attachment file not found: ${attachment.path}`);
      }
    }
  }

  const mailOptions = {
    from: {
      name: "Amour Editorial",
      address: process.env.EMAIL_USER,
    },
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // Fallback to sender if receiver not set
    subject: subject,
    html: html,
    attachments: attachments,
    // Additional headers for better deliverability
    headers: {
      "X-Mailer": "Amour Editorial Contact Form",
      "X-Priority": "3",
    },
    // Reply-to header if different from sender
    replyTo: process.env.EMAIL_REPLY_TO || process.env.EMAIL_USER,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", {
      messageId: info.messageId,
      accepted: info.accepted,
      timestamp: new Date().toISOString(),
    });
    return info;
  } catch (error) {
    console.error("❌ Failed to send email:", error);

    // Provide more specific error messages
    if (error.code === "EAUTH") {
      throw new Error(
        "Email authentication failed. Please check your email credentials."
      );
    } else if (error.code === "ECONNECTION") {
      throw new Error(
        "Failed to connect to email server. Please check your internet connection."
      );
    } else if (error.code === "EMESSAGE") {
      throw new Error("Invalid email message format.");
    } else {
      throw new Error(`Email service error: ${error.message}`);
    }
  }
};

// Optional: Send test email function
const sendTestEmail = async () => {
  try {
    await sendEmail({
      subject: "🧪 Amour Editorial - Email Service Test",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #f59e0b;">✅ Email Service Test Successful</h2>
          <p>This is a test email to verify that your email service is working correctly.</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Service:</strong> Amour Editorial Contact Form</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            If you received this email, your email configuration is working properly.
          </p>
        </div>
      `,
    });
    console.log("✅ Test email sent successfully");
    return true;
  } catch (error) {
    console.error("❌ Test email failed:", error.message);
    return false;
  }
};

module.exports = {
  sendEmail,
  sendTestEmail,
  testEmailConnection,
};
