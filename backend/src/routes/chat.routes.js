const express = require('express');
const router = express.Router();

const { getAllChat } = require('../controllers/ChatController');

const {
  createChatWithNew,
  getAllChatRecord,
  getChatByProviderid,
  getChatByUserid,
  getChatById,
  markUserChatsAsRead,
  markProviderChatsAsRead,
  deleteChatRoom,
  getchatByRoom,
  deleteChatByRoom,
  deleteMessageFromRoom,
  getGroupChatById,
  changeProviderDeactiveStatus,
  deleteConsultantPermanent
} = require('../controllers/chatAndPayment.Controller');

// create Chat router
router.post('/create-chat', createChatWithNew);
router.get('/get-all-chat-record', getAllChatRecord);
router.get('/get-chat-by-providerId/:providerId', getChatByProviderid);
router.get('/get-chat-by-userId/:userId', getChatByUserid);
router.get('/get-chat-by-id/:id', getChatById);
router.get('/get-chat-by-room/:chatRoomId', getchatByRoom);
router.get('/get-group-chat-by-id/:id', getGroupChatById);
router.get('/get-all-chat', getAllChat);

router.put('/mark-user-chats-as-read/:userId', markUserChatsAsRead);
router.put('/mark-provider-chats-as-read/:providerId', markProviderChatsAsRead);

router.delete('/delete-chat-room/:chatRoomId', deleteChatRoom);
router.delete('/delete_chat_bt_room/:chatRoomId', deleteChatByRoom);
router.delete('/delete-messages-by-room/:chatRoomId', deleteMessageFromRoom);

router.patch('/update-provider-deactive-status/:id', changeProviderDeactiveStatus);
router.delete('/delete-consultant-permanent/:id', deleteConsultantPermanent);

module.exports = router;
