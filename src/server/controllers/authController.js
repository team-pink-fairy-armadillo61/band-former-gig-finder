const jwt = require('node-jsonwebtoken')
const { User } = require('../models/bandFormerModels.js');

const secret = process.env.JWT_SECRET;
const authController = {};

authController.createAuthJWT = (req, res, next) => {
  if(res.locals.userId) {
    try{
      const token = jwt.sign({
        id: res.locals.userId, 
      }, secret, { expiresIn: '1h'});
      res.locals.token = token;
      return next();
    }catch(err) {
      return next({
        log: `cookieController.startSessionCookie: An error occured > ${err}`,
        status: 500,
        message: { err: 'An error occurred' },
      });
    }
  } else {
    return next({
      log: `cookieController.startSessionCookie: An error occured > no 'userId' on res.locals.`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
  
};

authController.verifyJWT = async (req, res, next) => {
  const token = req.get('authorization');
  if (token) {
    try{
      const decoded = jwt.verify(token, secret);
      const result = await User.findById(decoded.id);
      if (result !== null) {
        console.log('User is logged in!');
        res.locals.loggedIn = true;
        res.locals.body = req.body;
        console.log('body set', res.locals.body)
        return next();
      } else {
        //handle this redirect on the client side
        console.log('User is not logged in, need to redirect');
        res.locals.loggedIn = false;
        res.locals.body = req.body;
        console.log('body set', res.locals.body)
        return next(next({
          log: `authController.verifyJWT: JWT is invalid, user needs to login again.`,
          code: 400,
          message: {err: 'New Login required.'},
        }));
      }
    } catch(err) {
      return next({
        log: `authController.verifyJWT: An error occured > ${err}`,
        status: 500,
        message: { err: 'An error occurred' },
      });
    }
  }
}


authController.verifyJWTBody = async (req, res, next) => {
  const { token } = req.body;
  if (token) {
    try{
      const decoded = jwt.verify(token, secret);
      const result = await User.findById(decoded.id);
      if (result !== null) {
        console.log('User is logged in!');
        res.locals.loggedIn = true;
        return next();
      } else {
        //handle this redirect on the client side
        console.log('User is not logged in, need to redirect');
        res.locals.loggedIn = false;
        console.log('body set', res.locals.body)
        return next(next({
          log: `authController.verifyJWT: JWT is invalid, user needs to login again.`,
          code: 400,
          message: {err: 'New Login required.'},
        }));
      }
    } catch(err) {
      res.locals.loggedIn = false;
      return next();
    }
  }
}

module.exports = authController;