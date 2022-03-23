import { shoppingCartModel } from '../models/shoppingCart';

const products = () => {
  return shoppingCartModel.find({}).populate('product');
}
 
const addProduct =  (productId: string) => {
  return shoppingCartModel.insertMany([{ product: productId }]);
}

const deleteProduct =  (id: string) => {
  return shoppingCartModel.deleteOne({ _id: id});
}

export {
  products,
  addProduct,
  deleteProduct
}
