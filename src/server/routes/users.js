const express = require('express');


const usersRouter = express.Router();


//get all users//don't use this
usersRouter.get('/', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`usersRouter.get / > working!`/*some stuff from middleware*/);
  });

//post new user (register)
usersRouter.post('/register', 
  //createUser
  //login user
  //setLocalStorage
  (req, res) => {
    return res.status(200).send(`usersRouter.post/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });

//login route -get un pw, return jwt
usersRouter.post('/login', 
  //verifyUser
  //setLocalStorage
  (req, res) => {
    const resp = {

    };
    return res.status(200).json(resp);
  });

//logout route

//get one user by ID
usersRouter.get('/:id', 
  //verify user (LocalStorage) 
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