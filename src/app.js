const express = require('express');

const app = express();
const port = 3000;
const { initialize } = require('./initialize.js');

app.get('/', (req, res) => {
  res.send('hello wrollsasdaddd');
});

initialize().then(
  app.listen(port, () => {
    console.log(`The app is running on port ${port}`);
  }),
);
