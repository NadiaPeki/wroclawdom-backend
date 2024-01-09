const mongoose = require('mongoose');
const Post = require('../models/post');

const handleError = (res, error) => {
  console.error('Error:', error);  
  res.status(500).json({ error });
}

const getPosts = (req, res) => {
  Post
    .find()  
    .then((posts) => {
      res
        .status(200)
        .json(posts)
    })
    .catch((err) => {
      console.error('Error fetching posts:', err); 
      handleError(res, err);
    });
}

const getPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await Post.findOne({ slug });
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

const deletePost = (req, res) => {
  Post
    .findByIdAndDelete(req.params.id)  
    .then((post) => {
      if (!post) {
        console.error('Post not found for deletion');  
        return res.status(404).json({ error: 'Post not found' });
      }
      res
        .status(200)
        .json(post)
    })
    .catch((err) => {
      console.error('Error deleting post:', err);
      handleError(res, err);
    });
}

const addPost = (req, res) => {
  const post = new Post(req.body)
  post
    .save()
    .then((result) => {
      res
        .status(200)
        .json(result)
    })
    .catch((err) => {
      console.error('Error adding post:', err);
      handleError(res, err);
    });
}

const updatePosts = async (req, res) => {
  try {
    const postId = req.params.id;
    const { category } = req.body;

    const post = await Post.findByIdAndUpdate(
      postId,
      { category },
      { new: true } // чтобы получить обновленный документ
    );

    if (!post) {
      console.error('Post not found for update');
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    handleError(res, error);
  }
};


module.exports = {
  getPosts,
  getPostBySlug,
  deletePost,
  addPost,
  updatePosts
}
