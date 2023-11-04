// require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.DB_URI;

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('CONNECTION OPEN!!!'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    userName: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    profilephoto_URL: String,
    instrumentation: String,
    location: String,
    availability: Boolean,
    email: String,
    videoURL: String,
    short_bio: String,
    socialmedia_link: String,
    user_role:String
});
const User = mongoose.model('user', userSchema);

const postSchema = new Schema({
    title: String,
    dates: Date,
    description: String,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})
const Post = mongoose.model('post', postSchema);
module.exports = {
    User,
    Post
}
