const Blog = require('../../schemas/blog_schema');

exports.getBlogs = async(req, res) => {
    const blogs = await Blog.find();
    res.status(200).json({msg: 'Blogs fetched successfully', blogs: blogs});
}

exports.addBlog = (req, res, next)=>{
    let newBlog = new Blog({
        name: req.body.name,
        url: req.body.url
    });

    newBlog.save((err, blog) => {
        if(err){
            res.status(200).json({msg: 'error'});
        }else{
            res.status(201).json({msg: 'Blog added', blog: blog});
        }
    });
}

exports.updateBlog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id,
    {
        name: req.body.name,
        url: req.body.url
    },
    {
        new: true
    },
    function(err, updatedBlog){
        if(err){
            res.status(200).json({msg:'failed'});
        }else{
            res.status(200).json({msg: 'success', blog: updatedBlog});
        }
    });
}

exports.deleteBlog = (req, res) => {
    Blog.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
}