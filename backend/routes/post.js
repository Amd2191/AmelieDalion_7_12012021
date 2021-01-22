const express = require('express')
const router = express.Router()

const postCtrl = require('../controllers/post')

const multer = require('../middlewares/postImages');

router.post('/post/create',multer,postCtrl.createPost);
router.get('/post',postCtrl.getAllPosts);
router.delete('/:id',postCtrl.deletePost)

module.exports = router