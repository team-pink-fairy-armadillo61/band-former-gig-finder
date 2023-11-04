const jwt = require('node-jsonwebtoken')
const { User } = require('../models/bandFormerModels.js');

const secret = process.env.JWT_SECRET;
const cookieController = {};

cookieController.startSessionSetCookie = (req, res, next) => {
  try{
    const token = jwt.sign({
      id: res.locals.id, 

    }, secret, { expiresIn: '1h'});
    res.cookie('ssid', token ,{
      httpOnly: true,
      secure:true,
    });
    return next();
  }catch(err) {
    return next();
  }
};


cookieController.isLoggedIn = async (req, res, next) => {
  if (req.cookies.ssid) {
    try{
      const decoded = jwt.verify(req.cookies.ssid);
      const result = await User.findById(decoded.id);
      if (result !== null) {
        console.log('User is logged in!');
        res.locals.loggedIn = true;
        return next();
      } else {
        console.log('User is not logged in, need to redirect');
        res.locals.loggedIn = false;
        return next();
      }
    } catch(err) {
      console.log
    }
  }
}

module.exports = cookieController;