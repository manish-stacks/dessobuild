// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const router = require("./routes"); // routes/index.js
const {apiLimiter} = require("./middlewares/rateLimit");
const ConnectDB = require("./config/db");

require("dotenv").config();
ConnectDB();

const app = express();

// middlewares
app.use(cors({ origin: (o, cb) => cb(null, o || true), credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/public", express.static("public"));

// cache control
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

// routes
app.use("/api", apiLimiter, router); 
app.get("/", (req, res) => res.send("Welcome To DessoBuild"));
app.get("/health", (req, res) => res.send("Healthy"));
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});
module.exports = app;
