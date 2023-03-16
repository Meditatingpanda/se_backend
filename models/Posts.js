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
            _id: String,
            text: String,
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ],
    likes: [
        {
            _id: String,
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