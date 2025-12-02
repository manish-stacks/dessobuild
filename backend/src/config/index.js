const db = require("./db");
const cloudinary = require("./cloudinary");
const sendEmail = require("./email");
const sendToken = require("./jwt");
const generateOtp = require("./otp");
const SendWhatsapp = require("./whatsapp");

module.exports = {
  db,
  cloudinary,
  sendEmail,
  sendToken,
  generateOtp,
  SendWhatsapp
};
