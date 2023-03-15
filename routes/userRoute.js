import express from 'express';

const router = express.Router();

//POST /api/follow/{id} authenticated user would follow user with {id}
router.post('/follow/:id', (req, res) => {

}
)
//POST /api/unfollow/{id} authenticated user would unfollow a user with {id}
router.post('/unfollow/:id', (req, res) => {

}
)

// - GET /api/user should authenticate the request and return the respective user profile.
//     - RETURN: User Name, number of followers & followings.
router.get('/user', (req, res) => {
    res.send('User Profile');
}
)

export default router;