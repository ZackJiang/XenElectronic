import { productModel } from '../models/product';

const products = () => {
  return productModel.find({});
}

export {
  products
}
