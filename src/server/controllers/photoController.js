const { User } = require('../models/bandFormerModels.js');
const fs = require('fs');
const photoController = {};
photoController.addPhoto = async (req, res, next) =>{
  
  try {
    console.log('reached server');
    console.log('file', req.file);
    console.log('body', Object.keys(req.body));
    fs.rename(req.file.path, `uploads/${Object.keys(req.body)[0]}.${req.file.filename}.${req.file.originalname}`, (err)=>{
      if (err) throw (err);
      console.log('Rename complete');
    });
    next();
  }catch(error){
    return next({
      log:`Express error handler caught error at postController.addPhoto: ${error}`,
      message:{err: 'Photo upload unsucessful.'}
    });
  }
};

module.exports = photoController;