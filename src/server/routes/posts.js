const express = require('express');
const postController = require('../controllers/postController.js');

const postsRouter = express.Router();

//get all posts
postsRouter.get('/', 
  postController.getPosts, 
  (req, res) => {
    return res.status(200).json(res.locals.posts);
  });

//get a post by an id
postsRouter.get('/:id', 
  postController.findPost,
  (req, res) => {
    return res.status(200).json(res.locals.foundPost);
  });

//post a post
postsRouter.post('/', 
  postController.addPost,  
  (req, res) => {
    return res.status(200).json(res.locals.addedPost);
  });

//patch a post by id
postsRouter.patch('/:id', 
  postController.updatePost,
  (req, res) => {
    return res.status(200).json(res.locals.updatedPost);
  });

//delete a post b yid
postsRouter.delete('/:id', 
  postController.deletePost,  
  (req, res) => {
    return res.status(200).json(res.locals.deletedPost);
  });



module.exports = {
  postsRouter: postsRouter
};