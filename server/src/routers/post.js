const router = require('express').Router();
const PostService = require('../models/post/post.service');

router.post('/', async (req, res) => {
  const { message, title } = req.body;
  const post = await PostService.createPost(title, message);
  return res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await PostService.getAllPosts();
  return res.json(posts);
});

module.exports = router;
