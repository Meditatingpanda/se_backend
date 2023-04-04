import { Schema, model } from "mongoose";

const TicketSchema = new Schema({
    type: {
        type: String,
    },
    description: {
        source: {
            type: String,
        },
        dst: {
            type: String,
        },
    },
    passenger: [
        {
            name: {
                type: String,
            },
            age: {
                type: Number,
            },
            gender: {
                type: String,
            },
            seat: {
                type: String,
            },
        }
    ]

}, {
    timestamps: true,
})


export default model("Ticket", TicketSchema)