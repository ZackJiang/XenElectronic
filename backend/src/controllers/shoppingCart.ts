import { Request, Response } from 'express'
import * as Service from '../services/shoppingCart';

const products = async (req: Request, res: Response) => {
  try {
    return res.status(200).send(await Service.products());
  } catch (err) {
    return res.send(`Error: ${err}`);
  }
}

const addProduct = async (req: Request, res: Response) => {
  const { productId } = req.body;

  try {
    return res.status(200).send(await Service.addProduct(productId));
  } catch(err) {
    return res.send(`Error: ${err}`);
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    return res.status(200).send(await Service.deleteProduct(id));
  } catch(err) {
    return res.send(`Error: ${err}`);
  }
}

export {
  products,
  addProduct,
  deleteProduct
}
