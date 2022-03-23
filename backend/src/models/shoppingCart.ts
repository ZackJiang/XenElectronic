import mongoose from "mongoose";

interface ShoppingCartDoc extends mongoose.Document {
  name: string;
  category: string;
  price: number;
  description: string;
}

const ShoppingCartSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
    ref:'Product'
  },
});

const shoppingCartModel = mongoose.model<ShoppingCartDoc>('ShoppingCart', ShoppingCartSchema)

export { shoppingCartModel }
