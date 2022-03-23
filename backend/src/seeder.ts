import mongoose from "mongoose";
import { productModel } from './models/product';

mongoose.connect('mongodb://localhost:27017/xendit', 
  {},
  () => {
    console.log('connected to database');
  },
)

const seedProducts = [
  {name: 'Nike1', category: 'shoes', price: 40, description: 'good!'},
  {name: 'Nike2', category: 'shoes', price: 40, description: 'good!'}
];

const seedDB = async () => {
  await productModel.deleteMany({});
  await productModel.insertMany(seedProducts);
}

seedDB().then(() => {
  mongoose.disconnect();
});
