const express = require('express');
const multer = require('multer');
const {
  createDescribeWork,
  getAllDescribeWork,
  deleteDescribeWork,
  updateWorkActiveStatus
} = require('../controllers/describeWork.controller');

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/create-describe-work-image', upload.single('image'), createDescribeWork);
router.get('/get-all-describe-work-image', getAllDescribeWork);
router.delete('/delete-describe-work-image/:id', deleteDescribeWork);
router.put('/update-work-banner-status/:id', updateWorkActiveStatus);

module.exports = router;
