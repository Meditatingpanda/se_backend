import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
    },
    is_admin: {
        type: Boolean,
        default: false
    }



}, {
    timestamps: true,
})

export default model("User", userSchema)