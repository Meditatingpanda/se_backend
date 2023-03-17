import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
import User from "../models/Users.js";

const protect = expressAsyncHandler(async (req, res, next) => {
    const auth = req.headers.authorization;
   //console.log(auth)
    if (auth && auth.startsWith("Bearer")) {
        const token = auth.split(" ")[1];
        const decoded = jwt.verify(token, config.JWT_SECRET);
       // console.log(decoded)
       
        // if token expired, decoded will be an error
       
        if (Boolean(decoded.message)) {
            res.status(401);
            throw new Error("Not authorized, token expired");
        }
        const user = await User.findById(decoded._id).select("-password");
       // console.log(user)
        if (!user) {
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