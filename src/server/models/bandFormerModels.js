// require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.DB_URI;

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("CONNECTION OPEN!!!"))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    userName: String,
    password: String,
    instrumentation: String,
    videoURL: String
});
const User = mongoose.model('user', userSchema);
module.exports = {
    User
}
