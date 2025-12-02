const express = require('express');
const router = express.Router();

const {
  createExpertise,
  getAllExpertise,
  getSingleExpertise,
  updateExpertise,
  deleteExpertise
} = require('../controllers/expertise.controller');

router.post('/create_expertise', createExpertise);
router.get('/all_expertise', getAllExpertise);
router.get('/single_expertise/:id', getSingleExpertise);
router.put('/update_expertise/:id', updateExpertise);
router.delete('/delete_expertise/:id', deleteExpertise);

module.exports = router;
