const Post = require('../../schemas/post_schema');

exports.getPosts = async(req, res) => {
    const Posts = await Post.find();
    res.status(200).json({msg: 'Posts fetched successfully', Posts: Posts});
}

exports.getPosts_pgn = async(req, res) => {
    const Posts = await Post.find();
    res.status(200).json({msg: 'Posts fetched successfully', Posts: Posts});
}

exports.getPosts_id = async(req, res) => {
    const post = await Post.find({_id: req.params.id});
    res.status(200).json({msg: 'Posts fetched successfully by id', posts: post});
}


exports.addPost = (req, res, next)=>{
    const imagePath = "http://localhost:3000/images/";
    
    let newPost = new Post({
        blog_id: req.body.blog_id,
        title: req.body.title,
        image: imagePath + req.file.filename,
        body: req.body.body,
        ref: req.body.ref
    });

    newPost.save((err, Post) => {
        if(err){
            res.status(200).json({msg: 'error'});
        }else{
            res.status(201).json({msg: 'Post added', Post: Post});
        }
    });
}


exports.updatePost = (req, res) => {
    const imagePath = "http://localhost:3000/images/";
    if(!req.file){
        Post.findByIdAndUpdate(req.params.id,
        {
            blog_id: req.body.blog_id,
            title: req.body.title,
            body: req.body.body,
            ref: req.body.ref
        },
        {
            new: true
        },
        function(err, updatedPost){
            if(err){
                res.status(200).json({msg:'failed'});
            }else{
                res.status(200).json({msg: 'success', Post: updatedPost});
            }
        });
    }else{
        Post.findByIdAndUpdate(req.params.id,
        {
            blog_id: req.body.blog_id,
            title: req.body.title,
            image: imagePath + req.file.filename,
            body: req.body.body,
            ref: req.body.ref
        },
        {
            new: true
        },
        function(err, updatedPost){
            if(err){
                res.status(200).json({msg:'failed'});
            }else{
                res.status(200).json({msg: 'success', Post: updatedPost});
            }
        });
    }
    
}


exports.deletePost = (req, res) => {
    Post.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
}