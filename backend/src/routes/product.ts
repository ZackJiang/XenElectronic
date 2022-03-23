import express from 'express'
import { products } from '../controllers/product'

const router = express.Router();

router.get('/products', products);

export { router as productRouter }
