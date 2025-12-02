const express = require('express');
const multer = require('multer');
const {
  createAboutImage,
  getAllAboutImage,
  deleteAboutImage,
  updateAboutActiveStatus
} = require('../controllers/aboutImage.controller');

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/create-about-image', upload.single('image'), createAboutImage);
router.get('/get-all-about-image', getAllAboutImage);
router.delete('/delete-about-image/:id', deleteAboutImage);
router.put('/update-about-banner-status/:id', updateAboutActiveStatus);

module.exports = router;
