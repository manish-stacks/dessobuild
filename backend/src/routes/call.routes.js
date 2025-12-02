const express = require('express');
const router = express.Router();

const {
  createCall,
  call_status,
  get_call_history_by_provider,
  get_call_history_by_user,
  delete_call_history,
  getAllCallHistory,
  createCallFreeModule
} = require('../controllers/call.controller');

router.post('/create-call', createCall);
router.post('/call_status-call', call_status);
router.get('/get-call-by-provider/:providerId', get_call_history_by_provider);
router.get('/get-call-by-user/:userId', get_call_history_by_user);
router.get('/get-call-by-admin', getAllCallHistory);
router.delete('/delete-call-by-admin/:id', delete_call_history);

router.post('/create_call_for_free', createCallFreeModule);

module.exports = router;
