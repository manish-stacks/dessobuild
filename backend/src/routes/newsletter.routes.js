const express = require('express');
const router = express.Router();

const {
  createNewsLetter,
  getAllNewsLetter,
  deleteNewsLetter,
  getSingleNewsLetter,
  sendNewsLetterMessage
} = require('../controllers/newsLetter.controller');

router.post('/create_newletter', createNewsLetter);
router.get('/all_newsletter', getAllNewsLetter);
router.get('/single_newsletter/:id', getSingleNewsLetter);
router.delete('/delete_newsletter/:id', deleteNewsLetter);
router.post('/send_message_newsletter', sendNewsLetterMessage);

module.exports = router;
