import { Request, Response } from 'express'
import * as Service from '../services/product';

const products = async (req: Request, res: Response) => {
  try {
    return res.status(200).send(await Service.products());
  } catch (err) {
    return res.send(`Error: ${err}`);
  }
}

export {
  products,
}
