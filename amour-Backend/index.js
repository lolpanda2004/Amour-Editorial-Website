const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Trust proxy for accurate IP addresses (useful when behind reverse proxy)
app.set("trust proxy", 1);

// Enhanced CORS configuration
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [process.env.FRONTEND_URL, "https://amour-editorial-website.vercel.app"]
      : ["http://localhost:3000", "http://127.0.0.1:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" })); // Limit JSON payload size
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Security headers
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const ip = req.ip || req.connection.remoteAddress;
  console.log(`[${timestamp}] ${req.method} ${req.path} - IP: ${ip}`);
  next();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Routes
app.use("/api", require("./routes")); // Includes formRoutes, pageRoutes, testimonialRoutes, authRoutes

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
  });
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`
🚀 Amour Editorial Backend Server
📍 Server running on port ${PORT}
🌍 Environment: ${process.env.NODE_ENV || "development"}
⏰ Started at: ${new Date().toISOString()}
  `);
});
