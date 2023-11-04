const model = require('../models/bandFormerModels');
const postController = {};

postController.addPost = async (req, res, next) => {
  try {
    const { title, dates, user_id, description } = req.body;
    const addedPost = await model.Post.create(req.body);
    res.locals.addedPost = addedPost;
    return next();

  } catch (error) {
    next({
      log: 'Express error handler caught error at postController.addPost',
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
    next({
      log: 'Express error handler caught error at postController.getPosts',
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
    next({
      log: 'Express error handler caught error at postController.updatePost',
      message: {err: 'Error Occured'},
    });  
  }
}