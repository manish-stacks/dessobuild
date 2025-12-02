const express = require('express');
const multer = require('multer');
const {
  createBanner,
  getAllBanner,
  deleteBanner,
  updateBannerActiveStatus
} = require('../controllers/banner.Controller');

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/create-banner', upload.single('bannerImage'), createBanner);
router.get('/get-all-banner', getAllBanner);
router.delete('/delete-banner/:id', deleteBanner);
router.put('/update-banner-status/:id', updateBannerActiveStatus);

module.exports = router;
