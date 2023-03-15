import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';


const port = process.env.PORT || 3000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  });
});


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port http://localhost:${port}/`);
}
);

