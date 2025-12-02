const express = require('express');
const multer = require('multer');
const {
  createplanJourneyImage,
  getAllJourneyImage,
  deleteJourneyImage,
  updatePlanActiveStatus
} = require('../controllers/planJourneyImage.controller');

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/create-plan-journey-image', upload.single('image'), createplanJourneyImage);
router.get('/get-all-plan-journey-image', getAllJourneyImage);
router.delete('/delete-plan-journey-image/:id', deleteJourneyImage);
router.put('/update-plan-banner-status/:id', updatePlanActiveStatus);

module.exports = router;
about.routes.js