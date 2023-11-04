const express = require('express');

const postsRouter = express.Router();

//get all posts
postsRouter.get('/', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send('postsRouter.get > working!'/*some stuff from middleware*/);
  });

//get a post by an id
postsRouter.get('/:id', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`postsRouter.get/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });

//post a post
postsRouter.post('/', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`postsRouter.post / > working!`/*some stuff from middleware*/);
  });

//patch a post by id
postsRouter.patch('/:id', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`postsRouter.patch/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });

//delete a post b yid
postsRouter.delete('/:id', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`postsRouter.delete/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });



module.exports = {
  postsRouter: postsRouter
};