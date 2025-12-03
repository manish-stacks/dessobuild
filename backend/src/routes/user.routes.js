const router = require('express').Router();
const multer = require('multer');
const {
  registeruser,
  getAllUsers,
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
const auth = require('../middlewares/auth');
const role = require("../middlewares/role");

const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post('/register', registeruser);
router.post('/verify/:type', verifyEmail);
router.post('/login', login);

router.put('/user/update-profile/:id', auth, role(["user"]), upload.single('ProfileImage'), updateProfile);
router.put('/update_user_profile_image/:id', upload.single('ProfileImage'), updateUserProfileImage);
router.get('/universal_logout/:id', logout);

router.post('/Changepassword', Changepassword);
router.post('/resend-otp/:type', resendOtp);
router.post('/forgot-password', auth, role(["user","provider"]), forgotPassword);
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
