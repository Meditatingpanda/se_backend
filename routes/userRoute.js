import express from 'express';
import userController from '../controller/userController.js';
const router = express.Router();

//POST /api/follow/{id} authenticated user would follow user with {id}
router.post('/follow/:id', userController.followUser);

//POST /api/unfollow/{id} authenticated user would unfollow a user with {id}
router.post('/unfollow/:id', userController.unfollowUser);

// - GET /api/user should authenticate the request and return the respective user profile.
//     - RETURN: User Name, number of followers & followings.
router.get('/user', userController.getUser);

export default router;