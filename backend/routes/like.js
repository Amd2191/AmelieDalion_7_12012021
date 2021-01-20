const express = require('express')
const router = express.Router()

const likeCtrl = require('../controllers/like')

router.post('/like/create',likeCtrl.createLike);
router.delete('/like/:id',likeCtrl.deleteLike)

module.exports = router