import expressAsyncHandler from "express-async-handler";
import User from "../models/Users.js";

const userController = {
    getUser: expressAsyncHandler(async(req, res) => {
        const user = req.user;
        res.json({ user });
    }),
    followUser: expressAsyncHandler(async(req, res) => {
       
       
    }),
    unfollowUser: expressAsyncHandler(async(req, res) => {
        res.send('Unfollow User');
    })



}


export default userController