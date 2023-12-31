const model = require('../models/bandFormerModels');
const postController = {};

postController.addPost = async (req, res, next) => {
  try {
    const { title, dates, user_id, description } = req.body;
    const addedPost = await model.Post.create(req.body);
    res.locals.addedPost = addedPost;
    return next();

  } catch (error) {
    return next({
      log: `'Express error handler caught error at postController.addPost': ${error}`,
      message: {err: 'Error Occured'}, 
    });
  }
};

postController.getPosts = async (req, res, next) => {
  try {
    const posts = await model.Post.find();
    res.locals.posts = posts;
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error at postController.getPosts',
      message: {err: 'Error Occured'},
    });
  }
};

postController.findPost = async (req, res, next) => {
  try {
    const id = req.params.id;

    const foundPost = await model.Post.findOne({_id: id});
    res.locals.foundPost = foundPost; 
    return next();
  } catch (error) {
    return next({
      log: `'Express error handler caught error at postController.findPost': ${error}`,
      message: {err: 'Error Occured'}, 
    });
  }
};

postController.updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, dates, description } = req.body;

    const updatedPost = await model.Post.findOneAndUpdate({_id: id}, 
      {title, dates, description}, {new: true});
    res.locals.updatedPost = updatedPost;
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error at postController.updatePost',
      message: {err: 'Error Occured'},
    });  
  }
};

postController.deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedPost = await model.Post.findOneAndDelete({_id: id});
    res.locals.deletedPost = deletedPost;
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error at userController.deletePost',
      message: {err: 'Error Occured'},
    });
  }
};

module.exports = postController;