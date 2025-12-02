const express = require('express');
const router = express.Router();

const {
  sendOtpForUpdateDetail,
  verifyOtpForUpdateDetail
} = require('../controllers/provider.controller');

router.post('/otp_send_before_update', sendOtpForUpdateDetail);
router.post('/verify_otp_before_update', verifyOtpForUpdateDetail);

module.exports = router;
