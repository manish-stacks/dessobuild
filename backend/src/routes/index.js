const express = require('express');
const router = express.Router();

// Simple ping
router.get('/', (req, res) => res.send('API v1 OK'));

// USERS + PROVIDERS + ADMIN USERS
router.use('/', require('./user.routes'));
router.use('/', require('./provider.routes'));
// router.use('/', require('./admin.routes'));

// REVIEW
router.use('/', require('./review.routes'));

// CMS / CONTENT
router.use('/', require('./banner.routes'));
router.use('/', require('./describeWork.routes'));
router.use('/', require('./planJourney.routes'));
router.use('/', require('./about.routes'));
router.use('/', require('./testimonial.routes'));
router.use('/', require('./blog.routes'));
router.use('/', require('./blogComment.routes'));

// CHAT
router.use('/', require('./chat.routes'));
router.use('/', require('./manualChat.routes'));

// PAYMENTS / WITHDRAW / COMMISSION
// router.use('/', require('./payment.routes'));
router.use('/', require('./withdraw.routes'));
router.use('/', require('./commission.routes'));

// PROVIDER SERVICES + CALLS
router.use('/', require('./providerService.routes'));
router.use('/', require('./call.routes'));

// MEMBERSHIP + COUPONS
router.use('/', require('./membership.routes'));
router.use('/', require('./adminCoupon.routes'));
// router.use('/', require('./rechargeCoupon.routes'));

// GLOBAL REF DISCOUNT
router.use('/', require('./globelUserRef.routes'));

// OTP BEFORE UPDATE
router.use('/', require('./otpUpdate.routes'));

// NEWSLETTER / EXPERTISE / TERMS / CONTACT
router.use('/', require('./newsletter.routes'));
router.use('/', require('./expertise.routes'));
router.use('/', require('./term.routes'));
router.use('/', require('./contact.routes'));

module.exports = router;
