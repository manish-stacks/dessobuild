// src/utils/constants.js
module.exports = {
  TIMEOUT_DURATION: 60_000,
  MAX_FILE_SIZE: 5 * 1024 * 1024,
  ALLOWED_FILE_TYPES: ["image/jpeg", "image/png", "image/gif"],
  PROHIBITED_PATTERNS: [
    /\b\d{10}\b/,
    /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/,
    /@[\w.-]+\.[a-zA-Z]{2,6}/,
    /\b18\+|adult\b/i,
  ],
};
