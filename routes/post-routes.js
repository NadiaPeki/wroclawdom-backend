const express = require('express');
const router = express.Router();
const { getPosts, getPostBySlug, deletePost, addPost, updatePosts } = require('../controllers/post-controller');

router.get('/posts', getPosts);
router.get('/posts/:slug', getPostBySlug); // Используем /posts/:slug вместо /posts/:id
router.delete('/posts/:id', deletePost);
router.post('/posts', addPost);
router.patch('/posts/:id', updatePosts);

module.exports = router;
