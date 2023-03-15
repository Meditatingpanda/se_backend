import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [
        {
            _id: true,
            text: String,
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ],
    likes: [
        {
            _id: true,
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ]


}, {
    timestamps: true
})


export default model("Post", postSchema)