import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
import User from "../models/Users.js";

const protect = expressAsyncHandler(async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]|| req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        // if token expired, decoded will be an error
        if (decoded.message) {
            res.status(401);
            throw new Error("Not authorized, token expired");
        }
        const user = await User.findById(decoded.id).select("-password");
        if(!user) {
            res.status(401);
            throw new Error("Not authorized, no user found");
        }
        req.user = user;
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }


});

export default protect;