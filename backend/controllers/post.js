const fs = require('fs');
const models = require('../models');
const jwt = require('jsonwebtoken');
var asyncModule = require('async');

exports.createPost = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'SrYyE!&J5BzF~oh^Z$i=');
    const userId = decodedToken.userId;
    var title = req.body.title;
    var content = req.body.content;
    var attachment = req.body.picture;
    if (title == null || content == null) {
        return res.status(400).json({
            'error': 'missing parameters'
        });
    }
    asyncModule.waterfall([
        function (done) {
            models.User.findOne({
                    attributes: ['id'],
                    where: {
                        id: userId
                    }
                })
                .then(function (userFound) {
                    done(null, userFound);
                })
                .catch(function (err) {
                    return res.status(500).json({
                        'error': 'unable to verify user'
                    });
                });
        },
        function (userFound, done) {
            if (userFound) {
                models.Post.create({
                        title: title,
                        content: content,
                        attachment: `${req.protocol}://${req.get('host')}/images/${attachment}`,
                        likes: 0,
                        UserId: userFound.id
                    })
                    .then(newPost => {
                        done(newPost);
                    });
            } else {
                res.status(404).json({
                    'error': 'user not found'
                });
            }
        }
    ], function (newPost) {
        if (newPost) {
            return res.status(201).json(newPost);
        } else {
            return res.status(500).json({
                'error': 'cannot post your post'
            });
        }
    });
};

exports.getAllPosts = (req, res, next) => {
    var order = req.query.order;
    var fields = req.query.fields;
    models.Post.findAll({
            order: [(order != null) ? order.split(':') : ['title', 'ASC']],
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            include: [{
                model: models.User,
                attributes: ['username']
            }]
        })
        .then(posts => {
            if (posts) {
                res.status(200).json(posts);
            } else {
                res.status(404).json({
                    'error': 'no post found'
                });
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                "error": "invalid fields"
            });
        });
};

exports.deletePost = (req, res, next) => {
    try{
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'SrYyE!&J5BzF~oh^Z$i=');
    const userId = decodedToken.userId;
    const isAdmin = models.User.findOne({
        where: {
            id: userId
        }
    });
    const post = models.Post.findone({
        where: {
            id: req.params.id
        }
    });
    if (userId === post.UserId || isAdmin.admin === true) {
        const filename = post.attachment.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            post.destroy({
                    id: post.id
                })
                .then(() => res.status(200).json({
                    message: 'Post deleted'
                }))
                .catch(error => res.status(404).json({
                    'error': 'post not found'
                }));
        });
    } else {
        res.status(400).json({
            'error': 'You are not allowed to delete this post'
        })
    }
}catch(error) {
        res.status(500).json({
        'error': 'cannot delete post'
    })};
};