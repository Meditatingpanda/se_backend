import expressAsyncHandler from "express-async-handler"
const postController = {

    createPost: expressAsyncHandler(async (req, res) => {
        res.send('Create Post')
    })
    ,
    deletePost: expressAsyncHandler((req, res) => {
        res.send('Delete Post')
    }),
    likePost: expressAsyncHandler((req, res) => {
        res.send('Like Post')
    })
    ,
    unlikePost: expressAsyncHandler((req, res) => {
        res.send('Unlike Post')
    })
    ,
    commentPost: expressAsyncHandler((req, res) => {
        res.send('Comment Post')
    })
    ,
    getSinglePost: expressAsyncHandler((req, res) => {
        res.send('Get Single Post')
    }),
    getAllPosts: expressAsyncHandler((req, res) => {
        res.send('Get All Posts')
    })


}

export default postController