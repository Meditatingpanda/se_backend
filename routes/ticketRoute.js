import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Ticket from '../models/Ticket.js';
const router = express.Router();

router.post('/save_ticket', expressAsyncHandler(async (req, res) => {
   
    const { train, passenger } = req.body;
   
    const ticket = await Ticket.create({
        description: {
            source: train.from,
            dst: train.to
        },
        passenger: {
            name: passenger.name,
            age: passenger.age,
            gender: passenger.gender
        },
    })
    if (ticket) {
        res.status(200).json({
            message: "Ticket created successfully"
        })
    }
    else {
        res.status(400).json({
            message: "Something went wrong"
        })
    }

}))

export default router;