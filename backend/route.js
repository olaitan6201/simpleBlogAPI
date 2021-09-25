var express = require('express');
const router = express.Router();

///Schemas
const Post = require('../schemas/post_schema');
const Blog = require('../schemas/blog_schema');
const Comment = require('../schemas/comment_schema');


////Controllers
const PostController = require('./controller/post_controller');
const CommentController = require('./controller/comment_controller');
const BlogController = require('./controller/blog_controller');

const storage = require('./helper/storage');
const multer = require('multer');




//blog data 
router.get('/blog/fetch', BlogController.getBlogs);
router.post('/blog/add', BlogController.addBlog);
router.put('/blog/update/:id', BlogController.updateBlog);
router.delete('/blog/delete/:id', BlogController.deleteBlog);


//post data 
router.get('/post/fetch/all', PostController.getPosts);
router.get('/post/fetch/pgn', PostController.getPosts_pgn);
router.get('/post/fetch/:id', PostController.getPosts_id);
router.post('/post/add', storage.single('image'), PostController.addPost);
router.put('/post/updateWithImage/:id', storage.single('image'), PostController.updatePost);
router.put('/post/update/:id', PostController.updatePost);
router.delete('/post/delete/:id', PostController.deletePost);



////comment data
router.get('/comment/fetch', CommentController.getComments);
router.post('/comment/add', CommentController.addComment);
router.put('/comment/update/:id', CommentController.updateComment);
router.delete('/comment/delete/:id', CommentController.deleteComment);



module.exports = router;