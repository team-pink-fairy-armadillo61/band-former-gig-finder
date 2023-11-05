const express = require('express');


const usersRouter = express.Router();
const authController = require('../controllers/authController.js');
const userController = require('../controllers/userController.js');
//get all users//don't use this
usersRouter.get('/', 
//middleware goes here  
  (req, res) => {
    return res.status(200).send(`usersRouter.get / > working!`/*some stuff from middleware*/);
  });

//post new user (register)
usersRouter.post('/register', 
  userController.createUser,
  authController.createAuthJWT,
  (req, res) => {
    return res.status(200).json(res.locals.token);
  });

//login route -get un pw, return jwt
usersRouter.post('/login', 
  userController.verifyUser,
  authController.createAuthJWT,
  (req, res) => {
    return res.status(200).json(res.locals.token);
  });

//logout route

//get one user by ID
usersRouter.get('/:id', 
  authController.verifyJWT,
  userController.getUser,
  (req, res) => {
    return res.status(200).json(res.locals.foundUser);
  });

//patch user by ID
usersRouter.patch('/:id', 
  authController.verifyJWT,
  (req, res) => {
    return res.status(200).send(`usersRouter.patch/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });


//delete user by id
usersRouter.delete('/:id', 
  authController.verifyJWT,
  (req, res) => {
    return res.status(200).send(`usersRouter.delete/:id > working! ${req.params.id}`/*some stuff from middleware*/);
  });



module.exports = {
  usersRouter: usersRouter
};