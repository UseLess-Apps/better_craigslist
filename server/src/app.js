const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const { initialize } = require('./initialize.js');
const postRouter = require('./routers/post.js');
const swaggerDocument = require('./api/v1/api-doc');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello wrollsasdaddd');
});

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/posts', postRouter);

initialize().then(
  app.listen(port, () => {
    console.log(`The app is running on port ${port}`);
  }),
);
