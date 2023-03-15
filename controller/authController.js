import expressAsyncHandler from "express-async-handler";
import User from '../models/Users.js'
import { encodeToken } from "../utils/setToken.js";

const authController = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide an email and password");
    }
    const user = await User.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error("Invalid credentials");
    }
    const isMatch = user.password === password;
    if (!isMatch) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    const token = encodeToken({
        _id: user._id,
        username: user.username,
        email: user.email
    })
    res.status(200).json({
        token
    })
})

export default authController;