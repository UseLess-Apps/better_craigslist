const posts = require('./paths/posts');

const apiDoc = {
  openapi: '3.0.3',
  servers: [{ url: '/api/v1' }],
  info: {
    title: 'A getting started API.',
    version: '1.0.0',
  },
  definitions: {
    Post: {
      type: 'object',
      properties: {
        message: {
          description: 'the message in the post',
          type: 'string',
        },
        title: {
          description: 'the title of the post',
          type: 'string',
        },
      },
      required: ['message', 'title'],
    },
  },
  paths: {
    '/posts': posts,
  },
};

module.exports = apiDoc;
