import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from './routes/authRoute.js';
import postRouter from './routes/postRoute.js';
import userRouter from './routes/userRoute.js';
import * as colors from 'colors';
import connectMongoDB from './db/connectMongoDB.js';
import errorHandler from './middleware/error.js';
import protect from './middleware/validateToken.js';
const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(protect);
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// routes
app.use('/api', authRouter);
app.use('/api', postRouter);
app.use('/api', userRouter);


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port http://localhost:${port}/`.cyan);
  connectMongoDB();
}
);

