// require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});
require('dotenv').config();
const mongoose = require('mongoose');
// const uri = process.env.DB_URI;
const uri ='mongodb+srv://pedromontibello:duLDwCt51PfbAJpK@iterationprojectcluster.nlmq8sn.mongodb.net/?retryWrites=true&w=majority';
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = process.env.SALT_WORK_FACTOR;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('CONNECTION OPEN!!!'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilephoto_URL: String,
  instrumentation: Array,
  location: String,
  availability: Boolean,
  email: String,
  videoURL: String,
  short_bio: String,
  socialmedia_link: String,
  user_role: String,
});

userSchema.pre('save', async function (next) {
  try {
    const hash = await bcrypt.hash(this.password, Number(SALT_WORK_FACTOR));
    this.password = hash;
    return next();
  } catch (err) {
    return next({
      log: `userSchema: a DB error occured on pre-save hook: ${err}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
});

const User = mongoose.model('user', userSchema);

const postSchema = new Schema({
  title: String,
  dates: Date,
  description: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});
const Post = mongoose.model('post', postSchema);
module.exports = {
  User,
  Post,
};
