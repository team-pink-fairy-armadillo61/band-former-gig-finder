const model = require('../models/bandFormerModels');
//const bcrypt = require('bcrypt');
const userController = {};

userController.updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { name, username, password, instrumentation, videoURL, profilephoto_URL, location, availability, email, short_bio, socialmedia_link,  user_role } = req.body;
    const updatedUser = await model.User.findOneAndUpdate({_id: id}, 
      {name, username, password, instrumentation, videoURL, profilephoto_URL, location, availability, email, short_bio, socialmedia_link,  user_role}, 
      {new: true});

    if (!updatedUser) {
      return res.status(404).json({error: 'User not found to update'})
    }
    res.locals.updateUser = updatedUser;

    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error at userController.updateUser',
      message: {err: 'Error Occured'},
    });
  }
    
};

userController.getUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const foundUser = await model.User.findOne({_id: id});

    if (!foundUser) {
      return res.status(404).json({error: 'User not found'});
    }

    res.locals.foundUser = foundUser;
    return next();

  } catch (error) {
    return next({
      log: 'Express error handler caught error at userController.getUser',
      message: {err: 'Error Occured'},
    });
  }
};

userController.addUser = async (req, res, next) => {
  try {
    const { name, username, password, instrumentation, videoURL, profilephoto_URL, location, availability, email, short_bio, socialmedia_link,  user_role } = req.body;
    const addedUser = await model.User.create(req.body);
    res.locals.addedUser = addedUser;

    return next();

  } catch (error) {
    return next({
      log: `'Express error handler caught error at userController.addUser': ${error}`,
      message: {err: 'Error Occured'}, 
    });
  }
};

userController.getAllUsers = async (req, res, next) => {
  try {
    const users = await model.User.find();
    res.locals.users = users;
    return next();
  } catch (error) {
    return next({
      log: `'Express error handler caught error at userController.getAllUsers': ${error}`,
      message: {err: 'Error Occured'}, 
    }); 
  }
};

userController.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedUser = await model.User.findOneAndDelete({_id: id});
    res.locals.deletedUser = deletedUser;
    return next();
  } catch (error) {
    return next({
      log: `'Express error handler caught error at userController.deleteUser': ${error}`,
      message: {err: 'Error Occured'}, 
    }); 
  }
};

module.exports = userController;

