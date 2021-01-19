const fs = require('fs');
const { post } = require('../routes/user');

exports.createPost=(req,res,next)=>{
    const postObject=JSON.parse(req.body.post);
    const post= new post({...postObject});
    database.query('INSERT INTO post SET ?',post,function (error, results, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error occured"
            })
        } else {
            res.send({
                "code": 200,
                "success": "user registered successfully"
            });
        }
    })
        .catch(error => res.status(500).json({
            error
        }));
};

exports.getAllPosts = (req,res,next) =>{
    post.find()
    .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({
            error
        }));
};

exports.deletePost = (req, res, next) => {
    Post.findOne({
            _id: req.params.id
        })
        .then(post => {

            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {

                post.deleteOne({
                        _id: req.params.id
                    })
                    .then(() => res.status(200).json({
                        message: 'Objet supprimé !'
                    }))
                    .catch(error => res.status(400).json({
                        error
                    }));
            });
        })
        .catch(error => res.status(500).json({
            error
        }));
};