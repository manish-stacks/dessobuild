const express = require('express');
const multer = require('multer');
const {
  registeruser,
  getAllUsers,
  getSingleUserById, // agar kahi use karna ho future me
  updateProfile,
  login,
  logout,
  deleteAccount,
  banUserToggle,
  verifyEmail,
  resendOtp,
  forgotPassword,
  getUserById,
  createPayment,
  PaymentVerify,
  getSingleUser,
  updateUserPassword,
  getTotalRechargeAmount,
  Changepassword,
  getDetailForVerification,
  updateUserProfileImage,
  getAllUser
} = require('../controllers/user.Controller');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// User registration related routes
router.post('/register', registeruser);
router.put('/user/update-profile/:id', upload.single('ProfileImage'), updateProfile);
router.put('/update_user_profile_image/:id', upload.single('ProfileImage'), updateUserProfileImage);
router.post('/login', login);
router.get('/universal_logout/:id', logout);
router.post('/verify/:type', verifyEmail);
router.post('/Changepassword', Changepassword);
router.post('/resend-otp/:type', resendOtp);
router.post('/forgot-password', forgotPassword);
router.get('/get-user-by-id/:id', getUserById);
router.put('/update-user-password/:userId', updateUserPassword);
router.get('/total-recharge-amount', getTotalRechargeAmount);

router.get('/verify-user/:id', getDetailForVerification);

// admin user listing
router.get('/users', getAllUsers);
router.get('/get-single-user/:id', getSingleUser);
router.delete('/user-delete/:userId', deleteAccount);
router.put('/user-ban/:userId', banUserToggle);
router.get('/get-all-user', getAllUser);

// user payment
router.post('/create-payment/:userId', createPayment);
router.post('/verify-payment', PaymentVerify);

module.exports = router;
