import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import rail from 'indian-rail-api';


const router = express.Router();

router.get('/search', expressAsyncHandler(async (req, res) => {
    const { from, to, date } = req.query;
    // format date in dd-mm-yyyy
    const newDate = date.split('/').reverse().join('-');
    rail.getTrainOnDate(from, to, newDate, (r) => {
        const json = JSON.parse(r);

        // console log with depth

        res.status(200).json(json);
    });
}));

export default router;

