import expressAsyncHandler from "express-async-handler"
import Post from '../models/Posts.js'
import Posts from "../models/Posts.js";
import User from "../models/Users.js";
import { v4 as uuidv4 } from 'uuid';
const postController = {

    createPost: expressAsyncHandler(async (req, res) => {
        const { title, description } = req.body;
        const user = await User.findById(req.user._id);
        const post = await Post.create({
            title,
            description,
            userId: req.user._id
        })
       // console.log(user)
        user.posts_created.push(post._id);
        res.status(201).json({
            post: {
                id: post._id,
                title: post.title,
                description: post.description,
                createdAt: post.createdAt
            }
        })

    })
    ,
    deletePost: expressAsyncHandler(async (req, res) => {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        if (post) {
            res.status(200).json({
                message: 'Post deleted successfully'
            })
        }
        else {
            res.status(404).json({
                message: 'Post not found'
            })
        }
    }),
    likePost: expressAsyncHandler(async (req, res) => {
        const { id } = req.params;
        const userId = req.user._id;
        const post = await Posts.findById(id);
        if (!post) {
            res.status(404).json({
                message: 'Post not found'
            })
            return
        }
        const isLiked = post.likes.find((po) => po._id.toString() === userId.toString())
        if (isLiked) {
            res.status(400).json({
                message: 'Post already liked'
            })
            return;
        }
        post.likes.push(userId);
        post.save();
        res.status(200).json({
            message: 'Post liked successfully'

        })


    })
    ,
    unlikePost: expressAsyncHandler(async (req, res) => {
        const { id } = req.params;
        const userId = req.user._id;
        const post = await Posts.findById(id);
        if (!post) {
            res.status(404).json({
                message: 'Post not found'
            })
            return
        }
        const isLiked = post.likes.find((po) => po._id.toString() === userId.toString())
        console.log(isLiked)
        if (!isLiked) {
            res.status(400).json({
                message: 'Post not liked'
            })
            return
        }
        post.likes.pull(userId);
        post.save();
        res.status(200).json({
            message: 'Post unliked successfully'

        })
    })
    ,
    commentPost: expressAsyncHandler(async (req, res) => {
        const { id } = req.params;
        const { comment } = req.body;
        const userId = req.user._id;
        const post = await Posts.findById(id);
        if (!post) {
            res.status(404).json({
                message: 'Post not found'
            })
            return
        }
        const commentId = uuidv4();
        post.comments.push({
            userId,
            text: comment,
            id: commentId
        })
        post.save();
        res.status(200).json({
            message: 'Comment added successfully',
            comment_id: commentId
        })

    })
    ,
    getSinglePost: expressAsyncHandler(async (req, res) => {
        const { id } = req.params;
        const post = await Posts.findById(id);
        console.log(id)
        if (!post) {
            res.status(404).json({
                message: 'Post not found'
            })
            return
        }
        return res.status(200).json(post)
    }),
    getAllPosts: expressAsyncHandler(async (req, res) => {
        const id = req.user._id;
        const posts = await Posts.find({ userId: id }).sort({ createdAt: -1 });
        if (!posts) {
            res.status(404).json({
                message: 'No posts found'
            })
            return
        }
        return res.status(200).json(posts)
    })


}

export default postController