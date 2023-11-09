const express = require('express');
const photoController = require('../controllers/photoController.js');
const photoRouter = express.Router();
const multer = require('multer');
const upload = multer({dest:'uploads/'});


//post image
photoRouter.post(
  '/', 
  upload.single('avatar'),
  photoController.addPhoto,
  (req,res)=>{

    return res.status(202);
  }
);
/**
 * [1] {
[1]   fieldname: 'avatar',
[1]   originalname: 'saitama.png',
[1]   encoding: '7bit',
[1]   mimetype: 'image/png',
[1]   destination: 'uploads/',
[1]   filename: '3dc70f9d0ae76cd618733cee4360217f',
[1]   path: 'uploads/3dc70f9d0ae76cd618733cee4360217f',
[1]   size: 247236
[1] }
 */
module.exports = {
  photoRouter: photoRouter,
};