import expressAsyncHandler from "express-async-handler";

const userController = {
    getUser: expressAsyncHandler((req, res) => {
        res.send('User Profile');
    }),
    followUser: expressAsyncHandler((req, res) => {
        res.send('Follow User');
    }),
    unfollowUser: expressAsyncHandler((req, res) => {
        res.send('Unfollow User');
    })



}


export default userController