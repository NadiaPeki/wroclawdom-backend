const axios = require('axios');

const postId = '659552007bd7df10e00306f1';

const deletePostUrl = `http://localhost:3002/posts/${postId}`;

async function deletePost() {
    try {
        const response = await axios.delete(deletePostUrl);
        console.log('Post successfully deleted:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

deletePost();
