// controllers/formController.js
const path = require("path");
const fs = require("fs");
const { sendEmail } = require("../utilise/emailService");

// Input sanitization utility
const sanitizeInput = (input) => {
  if (typeof input !== "string") return "";

  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Remove script tags
    .replace(/[<>]/g, "") // Remove < and > characters
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, "") // Remove event handlers
    .trim()
    .substring(0, 1000); // Limit length to prevent overflow
};

// Email validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (optional field)
const validatePhone = (phone) => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
};

// Rate limiting helper (simple in-memory store)
const requestCounts = new Map();
const RATE_LIMIT = 5; // 5 requests per hour per IP
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

const checkRateLimit = (ip) => {
  const now = Date.now();
  const userRequests = requestCounts.get(ip) || [];

  // Remove old requests outside the window
  const recentRequests = userRequests.filter(
    (time) => now - time < RATE_WINDOW
  );

  if (recentRequests.length >= RATE_LIMIT) {
    return false; // Rate limit exceeded
  }

  // Add current request
  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);
  return true; // Within rate limit
};

// Contact Form Handler
const handleContactForm = async (req, res) => {
  try {
    // Rate limiting
    const clientIP =
      req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
        code: "RATE_LIMIT_EXCEEDED",
      });
    }

    // Input validation and sanitization
    const rawData = req.body;

    const name = sanitizeInput(rawData.name);
    const email = sanitizeInput(rawData.email);
    const phone = sanitizeInput(rawData.phone);
    const subject = sanitizeInput(rawData.subject);
    const message = sanitizeInput(rawData.message);

    // Validation checks
    const errors = {};

    if (!name || name.length < 2) {
      errors.name = "Name is required and must be at least 2 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!subject || subject.length < 5) {
      errors.subject = "Subject is required and must be at least 5 characters";
    }

    if (!message || message.length < 10) {
      errors.message = "Message is required and must be at least 10 characters";
    }

    if (phone && !validatePhone(phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    // Return validation errors
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        error: "Validation failed",
        details: errors,
        code: "VALIDATION_ERROR",
      });
    }

    // Spam detection (basic keywords check)
    const spamKeywords = [
      "casino",
      "viagra",
      "lottery",
      "winner",
      "congratulations",
      "claim now",
    ];
    const contentToCheck = `${subject} ${message}`.toLowerCase();
    const containsSpam = spamKeywords.some((keyword) =>
      contentToCheck.includes(keyword)
    );

    if (containsSpam) {
      console.warn(`Potential spam detected from IP: ${clientIP}`);
      return res.status(400).json({
        error: "Message content not allowed",
        code: "SPAM_DETECTED",
      });
    }

    // Create email content with better formatting
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f59e0b, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #f59e0b; }
          .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📧 New Contact Form Submission</h2>
            <p>You have received a new message through your website contact form.</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${
              phone
                ? `
            <div class="field">
              <div class="label">📞 Phone:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            `
                : ""
            }
            <div class="field">
              <div class="label">📋 Subject:</div>
              <div class="value">${subject}</div>
            </div>
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your Amour Editorial website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
            <p>IP Address: ${clientIP}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await sendEmail({
      subject: `🔔 Contact Form: ${subject}`,
      html: emailContent,
    });

    // Log successful submission (without sensitive data)
    console.log(
      `Contact form submitted successfully from IP: ${clientIP}, Email: ${email}`
    );

    res.status(200).json({
      success: true,
      message: "Message sent successfully. We will get back to you soon!",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Contact form error:", err);

    // Don't expose internal errors to client
    const isDevelopment = process.env.NODE_ENV === "development";

    res.status(500).json({
      error:
        "We apologize, but there was an issue sending your message. Please try again later.",
      code: "INTERNAL_ERROR",
      ...(isDevelopment && { details: err.message }),
    });
  }
};

// Booking Form Handler (with file upload)
const handleBookingForm = async (req, res) => {
  try {
    // Rate limiting
    const clientIP =
      req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
        code: "RATE_LIMIT_EXCEEDED",
      });
    }

    // Input validation and sanitization
    const rawData = req.body;
    const file = req.file;

    const name = sanitizeInput(rawData.name);
    const email = sanitizeInput(rawData.email);
    const service = sanitizeInput(rawData.service);
    const message = sanitizeInput(rawData.message);

    // Validation checks
    const errors = {};

    if (!name || name.length < 2) {
      errors.name = "Name is required and must be at least 2 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!service) {
      errors.service = "Service selection is required";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        error: "Validation failed",
        details: errors,
        code: "VALIDATION_ERROR",
      });
    }

    // File validation if present
    if (file) {
      const allowedTypes = [".pdf", ".doc", ".docx"];
      const fileExt = path.extname(file.originalname).toLowerCase();
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(fileExt)) {
        return res.status(400).json({
          error:
            "Invalid file type. Only PDF, DOC, and DOCX files are allowed.",
          code: "INVALID_FILE_TYPE",
        });
      }

      if (file.size > maxSize) {
        return res.status(400).json({
          error: "File size too large. Maximum size is 10MB.",
          code: "FILE_TOO_LARGE",
        });
      }
    }

    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f0fdf4; padding: 20px; border: 1px solid #d1fae5; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #10b981; }
          .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎯 New Booking Request</h2>
            <p>A new service booking has been submitted through your website.</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">🎯 Service:</div>
              <div class="value">${service}</div>
            </div>
            ${
              message
                ? `
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${message.replace(/\n/g, "<br>")}</div>
            </div>
            `
                : ""
            }
            ${
              file
                ? `
            <div class="field">
              <div class="label">📎 Attachment:</div>
              <div class="value">${file.originalname} (${(
                    file.size /
                    1024 /
                    1024
                  ).toFixed(2)} MB)</div>
            </div>
            `
                : ""
            }
          </div>
          <div class="footer">
            <p>This booking request was sent from your Amour Editorial website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
            <p>IP Address: ${clientIP}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const attachments = file
      ? [
          {
            filename: sanitizeInput(file.originalname),
            path: file.path,
          },
        ]
      : [];

    await sendEmail({
      subject: `🎯 Booking Request – ${service}`,
      html: emailContent,
      attachments,
    });

    // Clean up uploaded file after sending email
    if (file && fs.existsSync(file.path)) {
      try {
        fs.unlinkSync(file.path);
      } catch (cleanupError) {
        console.warn("Failed to clean up uploaded file:", cleanupError);
      }
    }

    console.log(
      `Booking form submitted successfully from IP: ${clientIP}, Email: ${email}, Service: ${service}`
    );

    res.status(200).json({
      success: true,
      message:
        "Booking submitted successfully. We will contact you soon to discuss your requirements!",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Booking form error:", err);

    // Clean up file if there was an error
    if (req.file && fs.existsSync(req.file.path)) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (cleanupError) {
        console.warn(
          "Failed to clean up uploaded file after error:",
          cleanupError
        );
      }
    }

    const isDevelopment = process.env.NODE_ENV === "development";

    res.status(500).json({
      error:
        "We apologize, but there was an issue processing your booking. Please try again later.",
      code: "INTERNAL_ERROR",
      ...(isDevelopment && { details: err.message }),
    });
  }
};

module.exports = {
  handleContactForm,
  handleBookingForm,
};
