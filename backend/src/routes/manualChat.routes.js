const express = require('express');
const router = express.Router();

const {
  createManualChatRoom,
  addOrUpdateProvidersInChat,
  getManualChatByProviderId,
  getManualChatBuUserId,
  updateGroupChatISEnded,
  updateManualChatRoom,
  updateGroupName
} = require('../controllers/chatAndPayment.Controller');

// create manual chat room with multiple vendor and user
router.post('/create_manual_chat_room', createManualChatRoom);
router.put('/manual-chat-room/:chatRoomId', updateManualChatRoom);
router.put('/add_members_to_manual_chat_room/:id', addOrUpdateProvidersInChat);
router.get('/get_manual_chat_by_userId/:userId', getManualChatBuUserId);
router.get('/get_manual_chat_by_providerId/:providerId', getManualChatByProviderId);
router.put('/update_manual_chat_ended/:id', updateGroupChatISEnded);
router.put('/update_group_name/:id', updateGroupName);

module.exports = router;
