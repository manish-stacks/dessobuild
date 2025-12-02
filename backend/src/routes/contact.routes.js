const express = require('express');
const router = express.Router();

const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
  addNote
} = require('../controllers/contactController');

router.post('/create-contact', createContact);
router.get('/get-contact', getAllContacts);
router.put('/update-contact/:id', updateContact);
router.put('/add-note/:id', addNote);
router.delete('/delete-contact/:id', deleteContact);

module.exports = router;
