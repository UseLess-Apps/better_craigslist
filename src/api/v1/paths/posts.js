module.exports = {
  get: {
    summary: 'Returns all posts',
    responses: {
      200: {
        description: 'A list of all posts',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/Post',
          },
        },
      },
    },
  },
  post: {
    summary: 'Create a post',
    requestBody: {
      description: 'Post information',
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#definitions/Post',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'The created post',
        schema: {
          type: 'object',
          items: {
            $ref: '#/definitions/Post',
          },
        },
      },
    },
  },
};
