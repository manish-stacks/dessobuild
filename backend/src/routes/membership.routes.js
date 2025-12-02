const express = require('express');
const router = express.Router();

const {
  createMemberShip,
  getAllMemberShip,
  getSingleMemberShip,
  updateMemberShip,
  deleteMemberShip,
  checkCouponCode,
  buyMemberShip,
  membershipPaymentVerify
} = require('../controllers/memberShip.controller');

router.post('/create_membership', createMemberShip);
router.get('/get_all_membership', getAllMemberShip);
router.get('/get_single_membership/:id', getSingleMemberShip);
router.put('/update_membership/:id', updateMemberShip);
router.delete('/delete_membership/:id', deleteMemberShip);

router.post('/check_coupon_code', checkCouponCode);
router.post('/buy_membership/:providerId', buyMemberShip);
router.post('/membership_payment_verify', membershipPaymentVerify);

module.exports = router;
