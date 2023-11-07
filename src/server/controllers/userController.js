const model = require('../models/bandFormerModels');
const bcrypt = require('bcrypt');
const userController = {};

userController.updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const {
      name,
      username,
      password,
      instrumentation,
      videoURL,
      profilephoto_URL,
      location,
      availability,
      email,
      short_bio,
      socialmedia_link,
      user_role,
    } = res.locals.body;

    console.log('body', res.locals.body);
    const updatedUser = await model.User.findOneAndUpdate(
      { _id: id },
      {
        name,
        username,
        password,
        instrumentation,
        videoURL,
        profilephoto_URL,
        location,
        availability,
        email,
        short_bio,
        socialmedia_link,
        user_role,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found to update' });
    }
    res.locals.updateUser = updatedUser;

    return next();
  } catch (error) {
    return next({
      log: `Express error handler caught error at userController.updateUser:${error}`,
      message: { err: 'Error Occured' },
    });
  }
};

userController.getUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const foundUser = await model.User.findOne({ _id: id });

    if (!foundUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.locals.foundUser = foundUser;
    return next();
  } catch (error) {
    return next({
      log: `Express error handler caught error at userController.getUser: ${error}`,
      message: { err: 'Error Occured' },
    });
  }
};
userController.getUserByToken = async (req, res, next) => {
  console.log('Get user by token called')
  try {
    const id =  res.locals.userId;
    const foundUser = await model.User.findOne({ _id: id });

    if (!foundUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    const shallowCopy = {
      name: foundUser.name,
      id: foundUser._id,
      userName: foundUser.userName,
      profilephoto_URL: foundUser.profilephoto_URL,
      instrumentation: foundUser.instrumentation,
      location: foundUser.location,
      availability: foundUser.availability,
      email: foundUser.email,
      videoURL: foundUser.videoURL,
      short_bio: foundUser.short_bio,
      socialmedia_link: foundUser.socialmedia_link,
      user_role: foundUser.user_role,
    };

    res.locals.foundUser = shallowCopy;
    return next();
  } catch (error) {
    return next({
      log: `Express error handler caught error at userController.getUser: ${error}`,
      message: { err: 'Error Occured' },
    });
  }
};

userController.addUser = async (req, res, next) => {
  console.log(req.body)
  try {
    const { name, userName, password } = req.body;
    
    const foundUser = await model.User.findOne({ userName });
    if (foundUser) {
      return next({
        log: `userController.createUser: User with username already exists: ${foundUser.userName}`,
        code: 400,
        message: { err: 'Bad Request' },
      });
    } else {
      const addedUser = await model.User.create({ name, userName, password });
      res.locals.addedUser = addedUser;
      res.locals.userId = addedUser._id;

      return next();
    }
  } catch (error) {
    return next({
      log: `Express error handler caught error at userController.addUser: ${JSON.stringify(
        error
      )}`,
      message: { err: 'Error Occured' },
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
      message: { err: 'Error Occured' },
    });
  }
};

userController.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedUser = await model.User.findOneAndDelete({ _id: id });
    res.locals.deletedUser = deletedUser;
    return next();
  } catch (error) {
    return next({
      log: `'Express error handler caught error at userController.deleteUser': ${error}`,
      message: { err: 'Error Occured' },
    });
  }
};

// userController.createUser = async (req, res, next) => {
//   try {
//     const { name, userName, password } = req.body;
//     const foundUser = await model.User.findOne({ userName });
//     if (foundUser) {
//       return next({
//         log: `userController.createUser: User with username already exists: ${foundUser.userName}`,
//         code: 400,
//         message: {err: 'Bad Request'},
//       });
//     } else {
//       const newUser = new model({userName, name, password});
//       const dbNewUser = await newUser.save();
//       res.locals.userId = dbNewUser._id;
//       return next();
//     }
//   } catch(err) {
//     return next({
//       log: `Express error handler caught error at userController.createUser: ${err}`,
//       message: {err: 'Error Occured'},
//     });
//   }
// };

userController.verifyUser = async (req, res, next) => {
  try {
    //console.log('verify user', req.body);
    const result = await model.User.findOne({ userName: req.body.userName }).exec();
    if (result === null) {
      //fix this in the component to handle the error
      console.log('navigation to signup is required');
      return next({
        log: `userController.verifyUser: No such user with username.`,
        code: 400,
        message: { err: 'No such username.' },
      });
    } else {
      const bool = await bcrypt.compare(req.body.password, result.password);
      if (bool) {
        const shallowCopy = {
          name: result.name,
          id: result._id,
          userName: result.userName,
          profilephoto_URL: result.profilephoto_URL,
          instrumentation: result.instrumentation,
          location: result.location,
          availability: result.availability,
          email: result.email,
          videoURL: result.videoURL,
          short_bio: result.short_bio,
          socialmedia_link: result.socialmedia_link,
          user_role: result.uuser_role,
        };

        res.locals.userId = result._id;
        res.locals.userData = shallowCopy;
        return next();
      } else {
        //fix this in the component to handle the error
        console.log('password is incorrect');
        return next({
          log: `userController.verifyUser:password is incorrect: ${req.body.password}`,
          code: 400,
          message: { err: 'wrong password.' },
        });
      }
    }
  } catch (err) {
    return next({
      log: `Express error handler caught error at userController.verifyUser: ${err}`,
      message: { err: 'Error Occured' },
    });
  }
};

module.exports = userController;
