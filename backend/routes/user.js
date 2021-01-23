const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const multer = require('../middlewares/userImages');
const multerConfig = require('../middlewares/multer-config')

router.post('/signup',multer,userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/user/profile',userCtrl.getUser);
router.put('/user/modify',multer,userCtrl.modifyUser);
router.delete('/user/:id', userCtrl.deleteUser);

module.exports=router;