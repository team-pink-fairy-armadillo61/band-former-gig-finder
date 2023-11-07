const express = require('express');
const userController = require('../controllers/userController.js');
const usersRouter = express.Router();
const authController = require('../controllers/authController.js');


//this is messed up - somehow, the proxy settings in webpack dev are and are messing up content-type; this is our workaround
usersRouter.use(express.json({type: "text/plain"}));

//get all users//don't use this
usersRouter.get('/', 
  userController.getAllUsers, 
  (req, res) => {
    return res.status(200).json(res.locals.users);
  });

//post new user (register)
// usersRouter.post('/register', 
//   userController.createUser,
//   authController.createAuthJWT,
//   (req, res) => {
//     return res.status(200).json(res.locals.token);
//   });

//post new user
usersRouter.post('/', 
  userController.addUser, 
  authController.createAuthJWT,
  (req, res) => {
    return res.status(200).json({user: res.locals.addedUser, token: res.locals.token});
  });

//verify tokens provided in components
usersRouter.post('/verify',
  authController.verifyJWTBody,
  (req, res) => {
    return res.status(200).json({success: res.locals.loggedIn});
  }
);

//login route -get un pw, return jwt
usersRouter.post('/login',
  userController.verifyUser,
  authController.createAuthJWT,
  (req, res) => {
    return res.status(200).json({userInfo:res.locals.userData, token: res.locals.token});
  });

//logout route

//get one user by ID
usersRouter.get('/:id', 
  userController.getUser,
  (req, res) => {
    return res.status(200).json(res.locals.foundUser);
  });

//get current user by token
usersRouter.post('/profile', 
  authController.verifyJWTBody,
  userController.getUserByToken,
  (req, res) => {
    return res.status(200).json(res.locals.foundUser);
  });

//patch user by ID
usersRouter.patch('/:id', 
  authController.verifyJWT,
  userController.updateUser, 
  (req, res) => {
    return res.status(200).json(res.locals.updateUser);
  });


//delete user by id
usersRouter.delete('/:id', 
  authController.verifyJWT,
  userController.deleteUser,  
  (req, res) => {
    return res.status(200).json(res.locals.deletedUser);
  });



module.exports = {
  usersRouter: usersRouter
};