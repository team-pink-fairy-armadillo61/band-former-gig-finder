const express = require('express');


const usersRouter = express.Router();


//get all users
usersRouter.get('/', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`usersRouter.get / > working!`/*some stuff from middleware*/);
  });

//post new user
usersRouter.post('/', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`usersRouter.post/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });



  
//get one user by ID
usersRouter.get('/:id', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send( `usersRouter.get/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });

//patch user by ID
usersRouter.patch('/:id', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`usersRouter.patch/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });


//delete user by id
usersRouter.delete('/:id', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`usersRouter.delete/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });



module.exports = {
  usersRouter: usersRouter
};