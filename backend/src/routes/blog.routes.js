const express = require('express');
const multer = require('multer');
const {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blog.controller');

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/create-blog', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'largeImage', maxCount: 1 },
]), createBlog);

router.get('/get-all-blog', getAllBlog);
router.get('/get-single-blog/:id', getSingleBlog);
router.put('/update-blog/:id', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'largeImage', maxCount: 1 },
]), updateBlog);
router.delete('/delete-blog/:id', deleteBlog);

module.exports = router;
