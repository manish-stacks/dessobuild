const express = require('express');
const multer = require('multer');
const { protect } = require('../middlewares/multer');

const {
  CreateProvider,
  GetMyProfile,
  addPortfolio,
  getAllProvider,
  getSingleProvider,
  updateProvider,
  updateDocuments,
  updatePassword,
  updateAvailable,
  updateBankDetail,
  updateIsBanned,
  deleteprovider,
  accountVerification,
  getProviderStatus,
  sendOtpForUpdateDetail,
  verifyOtpForUpdateDetail,
  changeProviderNumber,
  verifyOtpForChangeNumber,
  updateProfileImage,
  changeProviderDeactiveStatus,
  helpubuildverified,
  deleteConsultantPermanent
} = require('../controllers/provider.controller');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Provider registration related routes
router.post('/register-provider', CreateProvider);

router.put(
  '/update-provider-documents/:providerId',
  upload.fields([
    { name: 'adhaarCard', maxCount: 2 },
    { name: 'panCard', maxCount: 1 },
    { name: 'qualificationProof', maxCount: 1 },
    { name: 'photo', maxCount: 1 }
  ]),
  updateDocuments
);

router.put('/update_provider_profile_image/:id', upload.single('photo'), updateProfileImage);
router.put('/update-provider-profile/:_id', updateProvider);
router.put('/update-bank-detail/:providerId', updateBankDetail);
router.put('/update-provider-password/:providerId', updatePassword);
router.put('/update-provider-isbanned/:providerId', updateIsBanned);

router.get('/GetMyProfile', protect, GetMyProfile);
router.get('/get-single-provider/:_id', getSingleProvider);

router.post(
  '/addPortfolio',
  protect,
  (req, res, next) => {
    upload.fields([
      { name: 'PortfolioLink', maxCount: 1 },
      { name: 'GalleryImages', maxCount: 10 },
    ])(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'File upload error',
          error: err.message
        });
      }
      next();
    });
  },
  addPortfolio
);

router.put('/verified-provider/:id', helpubuildverified);
router.get('/get-all-provider', getAllProvider);
router.delete('/delete-provider/:id', deleteprovider);

router.put('/provider_verify/:id', accountVerification);

router.post('/provider_number_change_request/:id', changeProviderNumber);
router.post('/verify_provider_change_number/:id', verifyOtpForChangeNumber);

// provider status / deactivate etc
router.patch('/update-provider-deactive-status/:id', changeProviderDeactiveStatus);
router.post('/provider_status/:provider_id', getProviderStatus);
router.delete('/delete-consultant-permanent/:id', deleteConsultantPermanent);

module.exports = router;
