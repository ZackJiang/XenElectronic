import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { productRouter } from './routes/product';
import { shoppingCartRouter } from './routes/shoppingCart';

const app = express();
const port = 3000;

app.use(json());
app.use(productRouter);
app.use(shoppingCartRouter);

mongoose.connect('mongodb://localhost:27017/xendit', {}, () => {
  console.log('connected to database');
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
