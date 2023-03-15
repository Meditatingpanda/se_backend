import jwt from 'jsonwebtoken';
import config from '../config/index.js';


export const encodeToken = (user) => {
    return jwt.sign({
        _id: user._id,
        username: user.username,
        email: user.email
    }, config.JWT_SECRET, { expiresIn: '1d' });
}

export const decodeToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
            if (err) reject(err);
            resolve(decoded);
        });
    });
}