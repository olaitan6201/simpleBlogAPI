const Comment = require('../../schemas/Comment_schema');

exports.getComments = async(req, res) => {
    const Comments = await Comment.find();
    res.status(200).json({msg: 'Comments fetched successfully', Comments: Comments});
}

exports.addComment = (req, res, next)=>{
    let newComment = new Comment({
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        body: req.body.body
    });

    newComment.save((err, Comment) => {
        if(err){
            res.status(200).json({msg: 'error'});
        }else{
            res.status(201).json({msg: 'Comment added', Comment: Comment});
        }
    });
}

exports.updateComment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.id,
    {
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        body: req.body.body
    },
    {
        new: true
    },
    function(err, updatedComment){
        if(err){
            res.status(200).json({msg:'failed'});
        }else{
            res.status(200).json({msg: 'success', Comment: updatedComment});
        }
    });
}

exports.deleteComment = (req, res) => {
    Comment.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
}