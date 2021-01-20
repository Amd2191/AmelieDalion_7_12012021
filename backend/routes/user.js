const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const signupEntriesValidation = require('../middlewares/signupEntriesValidation');
const multer = require('../middlewares/multer-config');

router.post('/signup', multer,signupEntriesValidation ,userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/user/profile',userCtrl.getUser);
router.put('/user/modify',multer,userCtrl.modifyUser);
router.delete('/user/:id', userCtrl.deleteUser);

module.exports=router;