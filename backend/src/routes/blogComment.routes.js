const express = require('express');
const router = express.Router();

const {
  createBlogComment,
  getAllComments,
  getBlogCommentByBlogId,
  deleteBlogComment
} = require('../controllers/blogCommont.controller');

router.post('/create-blog-comment', createBlogComment);
router.get('/get-all-blog-comment', getAllComments);
router.get('/get-comment-by-blogId/:blogId', getBlogCommentByBlogId);
router.delete('/delete-blog-comment/:id', deleteBlogComment);

module.exports = router;
