import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { json } from 'body-parser';
import { productRouter } from './routes/product';
import { shoppingCartRouter } from './routes/shoppingCart';

const app = express();
const port = 5000;
const corsOptions = {
  origin: [
    'http://localhost:3000',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(json());
app.use(cors(corsOptions));
app.use(productRouter);
app.use(shoppingCartRouter);

mongoose.connect('mongodb://localhost:27017/xendit', {}, () => {
  console.log('connected to database');
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
