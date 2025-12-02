const express = require('express');
const router = express.Router();

const {
  createProviderService,
  getAllProviderService,
  getProviderServiceById,
  updateProviderService,
  deleteProviderService,
  findbyProvider
} = require('../controllers/providerService.controller');

router.post('/create-provider-service', createProviderService);
router.get('/get-all-provider-service', getAllProviderService);
router.get('/get-provider-service-by-id/:providerId', getProviderServiceById);
router.put('/update-provider-service/:providerId', updateProviderService);
router.delete('/delete-provider-service/:providerId', deleteProviderService);
router.get('/get-service-by-provider/:providerId/:category', findbyProvider);

module.exports = router;
