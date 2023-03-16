import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    posts_created: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        },
    ],
    followers: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ],
    following: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ],

}, {
    timestamps: true,
})

export default model("User", userSchema)