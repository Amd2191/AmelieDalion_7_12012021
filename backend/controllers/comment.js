const jwt = require('jsonwebtoken');
const models = require('../models');
var asyncModule = require('async');

exports.createComment = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'SrYyE!&J5BzF~oh^Z$i=');
    const userId = decodedToken.userId;
    var postId = parseInt(req.body.postId);
    asyncModule.waterfall([
        function (done) {
            models.Post.findOne({
                    where: {
                        id: postId
                    }
                })
                .then(function (postFound) {
                    done(null, postFound);
                })
                .catch(function (err) {
                    return res.status(500).json({
                        'error': 'unable to verify post'
                    });
                });
        },
        function (postFound, done) {
                models.User.findOne({
                        where: {
                            id: userId
                        }
                    })
                    .then(function (userFound) {
                        done(null, postFound, userFound);
                    })
                    .catch(function (err) {
                        return res.status(500).json({
                            'error': 'unable to verify user'
                        });
                    });
        },
        function (postFound, userFound, done) {
            if (userFound) {
                models.Comment.findOne({
                        where: {
                            userId: userId,
                            postId: postId
                        }
                    })
                    .then(function (userAlreadyLikedFound) {
                        done(null, postFound, userFound, userAlreadyLikedFound);
                    })
                    .catch(function (err) {
                        return res.status(500).json({
                            'error': 'unable to verify if user already liked'
                        });
                    });
            } else {
                res.status(404).json({
                    'error': 'user does not exist'
                });
            }
        },
        function (postFound, userFound, userAlreadyLiked, done) {
            if (!userAlreadyLiked) {
                postFound.addUser(userFound)
                    .then(function (alreadyLikeFound) {
                        done(null, postFound, userFound,userAlreadyLiked);
                    })
                    .catch(function (err) {
                        return res.status(500).json({
                            'error': 'unable to set user reaction'
                        });
                    });
            } else {
                    res.status(409).json({
                        'error': 'post already liked'
                    });
                }
        },
        function (postFound, userFound, done) {
            postFound.update({
                likes: postFound.likes + 1,
            }).then(function () {
                done(postFound);
            }).catch(function (err) {
                res.status(500).json({
                    'error': 'cannot update post like counter'
                });
            });
        },
    ], function (postFound) {
        if (postFound) {
            return res.status(201).json(postFound);
        } else {
            return res.status(500).json({
                'error': 'cannot update post'
            });
        }
    });
}

exports.deleteComment = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'SrYyE!&J5BzF~oh^Z$i=');
    const userId = decodedToken.userId;
    var postId = req.body.postId;
    var commentId = req.body.commentId;
    models.comment.findOne({
        where: {
            id: commentId,
            userId:userId,
            postId:postId
        }
    })
    .then(comment=> {
        comment.destroy({
            id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'Comment deleted'
        }))
        .catch(error => res.status(404).json({'error':'comment not found'
        }));
    })
    .catch(function (err) {
        return res.status(500).json({
            'error': 'unable to verify post'
        });
    });
}