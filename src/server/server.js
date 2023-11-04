const express = require('express');
require('./models/bandFormerModels');
const app = express();

const postsRouter = require('.routes/posts.js');
const userRouter = require('.routes/posts.js');

const PORT = 3000;


app.use(express.json());


app.get('/',
(req, res)=> {
  return res.status(200).send("IT'S ALIVE!");
});




app.use('/posts', post);

app.use();

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
