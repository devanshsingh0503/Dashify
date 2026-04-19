const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const rateLimiter = require("./middlewares/rateLimiter");
const errorHandler = require("./middlewares/error.middleware");

const authRoutes = require("./routes/auth.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://192.168.1.5:3001",
      "https://dashifyservices.in",
      "https://www.dashifyservices.in"
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(rateLimiter);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

app.use(errorHandler);

module.exports = app;