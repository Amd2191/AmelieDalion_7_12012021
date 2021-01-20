const express = require('express')
const router = express.Router()

const commentCtrl = require('../controllers/comment')


router.post('/comment/create',commentCtrl.createComment);
router.get('/comment',commentCtrl.getAllComments);
router.delete('/:id',commentCtrl.deleteComment)

module.exports = router