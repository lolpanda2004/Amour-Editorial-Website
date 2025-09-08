// server.js
import express from "express";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import multer from "multer";
import path from "path";
import sanitize from "sanitize-filename";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// -------------------- MIDDLEWARE -------------------- //
app.use(express.json()); // parse JSON
app.use(cors());
app.use(helmet());

// Rate limiter: 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// -------------------- MULTER CONFIG -------------------- //
const uploadFolder = "./uploads";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    const safeName = sanitize(file.originalname);
    cb(null, Date.now() + "-" + safeName);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".pdf" || ext === ".docx") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF or DOCX files are allowed"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// -------------------- NODEMAILER CONFIG -------------------- //
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// -------------------- ROUTES -------------------- //

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// Contact form route
app.post(
  "/api/contact",
  upload.single("document"), // "document" is the file input field name
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").notEmpty().withMessage("Message cannot be empty"),
  ],
  async (req, res) => {
    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    const fileInfo = req.file ? req.file.filename : "No file uploaded";

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contact@amoureditorials.com", // replace with destination email
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Document: ${fileInfo}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully");
    } catch (err) {
      console.error("❌ Error sending email:", err.message);
    }

    // Respond to frontend
    res.json({
      success: true,
      msg: "Form submitted successfully ✅",
      data: { name, email, message, document: fileInfo },
    });
  }
);

// -------------------- START SERVER -------------------- //
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
