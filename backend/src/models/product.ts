import mongoose from "mongoose";

interface ProductDoc extends mongoose.Document {
  name: string;
  category: string;
  price: number;
  description: string;
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const productModel = mongoose.model<ProductDoc>('Product', productSchema)

export { productModel }
