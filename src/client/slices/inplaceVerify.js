const jwt = require('node-jsonwebtoken');
const { User } = require('../../server/models/bandFormerModels.js');

const secret = process.env.JWT_SECRET;

const verifyJWT = async (jsonWebToken) => {
  try {
    const decoded = jwt.verify(jsonWebToken, secret);
    const result = await User.findById(decoded.id);
    return result !== null ? true : false;
  } catch(err) {
    console.log(`couldn't verify jwt: ${err}`);
    throw new Error(`couldn't verify jwt: ${err}`);
  }
};

module.exports = verifyJWT;