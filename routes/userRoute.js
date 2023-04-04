import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/Users.js';

const router = express.Router();

router.get('/user',expressAsyncHandler(async (req, res, next) => {
  console.log(req.user);
  const {id}=req.user;
  const user=await User.findById(id).select('-password');
  res.json(user);

}))
export default router;