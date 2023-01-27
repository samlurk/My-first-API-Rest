import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  console.log('Someone pinged here');
  res.send('Pong');
});
app.listen(port, () => console.log(`Server is listening on port ${port}`));
