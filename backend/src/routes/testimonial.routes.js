const express = require('express');
const multer = require('multer');
const {
  createTestimonial,
  getAllTestimonial,
  getsingleTestimonial,
  deleteTestimonial,
  updateTestimonial,
  updateTestimonialActiveStatus
} = require('../controllers/testimonial.controller');

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/create-testimonial', upload.single('image'), createTestimonial);
router.get('/get-all-testimonial', getAllTestimonial);
router.get('/get-single-testimonial/:id', getsingleTestimonial);
router.delete('/delete-testimonial/:id', deleteTestimonial);
router.put('/update-testimonial/:id', upload.single('image'), updateTestimonial);
router.put('/update-testimonial-status/:id', updateTestimonialActiveStatus);

module.exports = router;
