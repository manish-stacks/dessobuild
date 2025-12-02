const express = require('express');
const router = express.Router();

const {
  createWithdrawal,
  updateWithdrawStatus,
  deleteWithdrawRequest,
  getWithdrawalsByProviderId,
  getAllWithdrawals,
  getTotalWithdrawAndCommission
} = require('../controllers/withdraw.controller');

router.post('/create-withdraw-request', createWithdrawal);
router.put('/update-withdraw-status/:id', updateWithdrawStatus);
router.delete('/delete-withdraw-request/:id', deleteWithdrawRequest);
router.get('/get-withdrawals-by-providerid/:providerId', getWithdrawalsByProviderId);
router.get('/get-all-withdrawals', getAllWithdrawals);
router.get('/total-withdraw-and-commission', getTotalWithdrawAndCommission);

module.exports = router;
