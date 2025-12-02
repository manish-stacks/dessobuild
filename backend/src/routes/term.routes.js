const express = require('express');
const router = express.Router();

const {
  createTerm,
  getTerm,
  singleTerm,
  updateTerm
} = require('../controllers/termAndCondition');

router.post('/create_term', createTerm);
router.get('/all_term', getTerm);
router.get('/single_term/:type', singleTerm);
router.put('/update_term/:id', updateTerm);

module.exports = router;
