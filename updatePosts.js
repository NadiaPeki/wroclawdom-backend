const mongoose = require('mongoose');
const slugify = require('slugify');
const Post = require('./models/post');

mongoose.connect('mongodb://127.0.0.1:27017/postsbase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updatePosts = async () => {
  try {
    const existingPosts = await Post.find();

    for (const post of existingPosts) {
      const newSlug = slugify(post.title);
      post.slug = newSlug;

      // Добавляем поле category в каждый пост с указанным значением
      post.category = 'category';

      try {
        await post.save();
        console.log(`Updated slug and category for post ${post._id}`);
      } catch (saveError) {
        console.error(`Error saving post ${post._id}:`, saveError);
      }
    }

    console.log('Update completed.');
  } catch (error) {
    console.error('Error fetching existing posts:', error);
  } finally {
    mongoose.disconnect();
  }
};

updatePosts();
