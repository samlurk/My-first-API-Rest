import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes/index.route';
import db from './configs/mongo.config';
const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

db()
  .then(() => {
    console.log('Successful database connection');
  })
  .catch((err) => {
    console.log(err.message);
  });
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
