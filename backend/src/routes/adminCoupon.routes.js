const express = require('express');
const router = express.Router();

const {
  createAdminCoupon,
  getAllAdminCoupon,
  getSingleAdminCoupon,
  updateAdminCoupon,
  deleteAdminCoupon
} = require('../controllers/adminCoupon.controller');

router.post('/create_admin_coupon', createAdminCoupon);
router.get('/all_admin_coupon', getAllAdminCoupon);
router.get('/admin_coupon/:id', getSingleAdminCoupon);
router.put('/update_admin_coupon/:id', updateAdminCoupon);
router.delete('/delete_admin_coupon/:id', deleteAdminCoupon);

module.exports = router;
