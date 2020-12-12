const Post = require('./post.model');

const postsService = {
  getAllPosts: async () => {
    const posts = await Post.findAll({});
    return posts;
  },
  createPost: async (title, message) => {
    const post = await Post.create({
      title,
      message,
    });
    return post;
  },
};

module.exports = postsService;
