const express = require('express');
const router = express.Router();

const {
  createGlobelUserRefDis,
  getAllGlobelUserRefDis,
  updateGlobelUserRef,
  deleteGlobelUserRef,
  getSingleGlobelUserRef
} = require('../controllers/globelUserRefDis.controller');

router.post('/create_globel_discount', createGlobelUserRefDis);
router.get('/all_globel_discounts', getAllGlobelUserRefDis);
router.get('/globel_discount/:id', getSingleGlobelUserRef);
router.put('/update_globel_discount/:id', updateGlobelUserRef);
router.delete('/delete_globel_discount/:id', deleteGlobelUserRef);

module.exports = router;
