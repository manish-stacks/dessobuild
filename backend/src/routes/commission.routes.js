const express = require('express');
const router = express.Router();

const {
  createCommission,
  updateCommission,
  getSingleCommission,
  getAllCommissions,
  deleteCommission
} = require('../controllers/commission.controller');

router.post('/create-commission', createCommission);
router.put('/update-commission/:id', updateCommission);
router.get('/get-single-commision/:id', getSingleCommission);
router.get('/get-all-commision', getAllCommissions);
router.delete('/delete-commission/:id', deleteCommission);

module.exports = router;
