const express = require('express');
const userController = require('../controllers/userController.js');


const usersRouter = express.Router();


//get all users
usersRouter.get('/', 
  userController.getAllUsers, 
  (req, res) => {
    return res.status(200).json(res.locals.users);
  });

//post new user
usersRouter.post('/', 
  userController.addUser, 
  (req, res) => {
    return res.status(200).json(res.locals.addedUser);
  });



  
//get one user by ID
usersRouter.get('/:id', 
  userController.getUser, 
  (req, res) => {
    return res.status(200).json(res.locals.foundUser);
  });

//patch user by ID
usersRouter.patch('/:id', 
  userController.updateUser,  
  (req, res) => {
    return res.status(200).json(res.locals.updateUser);
  });


//delete user by id
usersRouter.delete('/:id', 
  userController.deleteUser,  
  (req, res) => {
    return res.status(200).json(res.locals.deletedUser);
  });



module.exports = {
  usersRouter: usersRouter
};