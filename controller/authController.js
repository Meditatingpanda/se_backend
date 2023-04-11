import expressAsyncHandler from "express-async-handler";
import User from '../models/Users.js'
import { encodeToken } from "../utils/setToken.js";

const authController = {
    login: expressAsyncHandler(async (req, res, next) => {
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
    }),
    register: expressAsyncHandler(async (req, res, next) => {

        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            res.status(400);
            throw new Error("Please provide an email and password");
        }
        const isExist = await User.findOne({ email });
        if (isExist) {
            res.status(400).json({
                message: "User already exist"
            });
            return
        }

        const user = await User.create({
            name,
            email,
            tel: phone,
            password
        })

        if (!user) {
            res.status(401);
            throw new Error("something went wrong");
        }

        res.status(200).json({
            message: "User created successfully"
        })

    })
}

export default authController;