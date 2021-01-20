const express = require('express')
const router = express.Router()

const postCtrl = require('../controllers/post')

const multer = require('../middlewares/multer-config')

router.post('/post/create',postCtrl.createPost);
router.get('/post',postCtrl.getAllPosts);
router.delete('/:id',postCtrl.deletePost)

module.exports = router