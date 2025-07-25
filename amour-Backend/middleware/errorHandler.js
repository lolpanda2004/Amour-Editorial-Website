// Enhanced error handler middleware
const errorHandler = (err, req, res, next) => {
  const timestamp = new Date().toISOString();
  const ip = req.ip || req.connection.remoteAddress;

  // Log error details (but not sensitive information)
  console.error(`[${timestamp}] ERROR - IP: ${ip}, Path: ${req.path}`, {
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    method: req.method,
    url: req.originalUrl,
    userAgent: req.get("User-Agent"),
  });

  // Default error
  let status = err.status || err.statusCode || 500;
  let message = "Internal server error occurred";
  let code = "INTERNAL_ERROR";

  // Handle specific error types
  if (err.type === "entity.parse.failed") {
    status = 400;
    message = "Invalid JSON format in request body";
    code = "INVALID_JSON";
  } else if (err.type === "entity.too.large") {
    status = 413;
    message = "Request payload too large";
    code = "PAYLOAD_TOO_LARGE";
  } else if (err.code === "LIMIT_FILE_SIZE") {
    status = 413;
    message = "File size too large";
    code = "FILE_TOO_LARGE";
  } else if (err.code === "LIMIT_UNEXPECTED_FILE") {
    status = 400;
    message = "Unexpected file field";
    code = "UNEXPECTED_FILE";
  } else if (err.code === "ECONNREFUSED") {
    status = 503;
    message = "Service temporarily unavailable";
    code = "SERVICE_UNAVAILABLE";
  } else if (err.name === "ValidationError") {
    status = 400;
    message = "Validation failed";
    code = "VALIDATION_ERROR";
  } else if (err.name === "CastError") {
    status = 400;
    message = "Invalid data format";
    code = "INVALID_FORMAT";
  } else if (status < 500) {
    // Client errors (4xx) - safe to expose message
    message = err.message || message;
    code = err.code || code;
  }

  // Prepare error response
  const errorResponse = {
    error: message,
    code: code,
    timestamp: timestamp,
    path: req.originalUrl,
  };

  // Add additional details in development
  if (process.env.NODE_ENV === "development") {
    errorResponse.details = {
      originalMessage: err.message,
      stack: err.stack,
      name: err.name,
    };
  }

  // Send error response
  res.status(status).json(errorResponse);
};

module.exports = errorHandler;
