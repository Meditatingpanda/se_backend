import expressAsyncHandler from "express-async-handler";
import User from "../models/Users.js";

const userController = {
    getUser: expressAsyncHandler(async (req, res) => {
        const id = req.user;
        const user = await User.findById(id).select('-password');
        res.json({ user });
    }),
    followUser: expressAsyncHandler(async (req, res) => {
        const { id } = req.params;
        const userId = req.user._id;
        const user = await User.findById(id);
        const isFollowing = user.followers.find((user) => user.userId.toString() === userId.toString());
        if (isFollowing) {
            res.status(400).json({
                message: 'User already followed'
            })
            return;
        }
        user.followers.push({ userId });
        await user.save();
        res.status(200).json({
            message: 'User followed successfully'
        })
    }),
    unfollowUser: expressAsyncHandler(async (req, res) => {
        const { id } = req.params;
        const userId = req.user._id;
        const user = await User.findById(id);
        const isFollowing = user.followers.find((user) => user.userId.toString() === userId.toString());
        if (!isFollowing) {
            res.status(400).json({
                message: 'User not followed'
            })
            return;
        }
        user.followers = user.followers.filter((user) => user.userId.toString() !== userId.toString());
        await user.save();
        res.status(200).json({
            message: 'User unfollowed successfully'
        })
    })



}


export default userController