import express from 'express';
import postController from '../controller/postController.js';
const router = express.Router();



// - POST api/posts/ would add a new post created by the authenticated user.
//     - Input: Title, Description
//     - RETURN: Post-ID, Title, Description, Created Time(UTC).

router.post('/posts', postController.createPost);
//- DELETE api/posts/{id} would delete post with {id} created by the authenticated user.

router.delete('/posts/:id', postController.deletePost);

//POST /api/like/{id} would like the post with {id} by the authenticated user.
router.post('/like/:id', postController.likePost);

//- POST /api/unlike/{id} would unlike the post with {id} by the authenticated user.

router.post('/unlike/:id', postController.unlikePost);

// - POST /api/comment/{id} add comment for post with {id} by the authenticated user.
//     - Input: Comment
//     - Return: Comment-ID

router.post('/comment/:id', postController.commentPost);


//GET api/posts/{id} would return a single post with {id} populated with its number of likes and comments
router.get('/posts/:id', postController.getSinglePost);


// - GET /api/all_posts would return all posts created by authenticated user sorted by post time.
// - RETURN: For each post return the following values
//     - id: ID of the post
//     - title: Title of the post
//     - desc: Description of the post
//     - created_at: Date and time when the post was created
//     - comments: Array of comments, for the particular post
//     - likes: Number of likes for the particular post    
router.get('/all_posts', postController.getAllPosts)


export default router;