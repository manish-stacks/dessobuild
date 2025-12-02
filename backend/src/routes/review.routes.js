const express = require('express');
const router = express.Router();
const {
  createReview,
  getAllReview,
  getReviewByProviderId
} = require('../controllers/review.Controller');

router.post('/create-rating', createReview);
router.get('/get-all-review', getAllReview);
router.get('/get-review-by-providerId/:_id', getReviewByProviderId);

module.exports = router;
