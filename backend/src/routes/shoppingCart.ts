import express from 'express'
import { products, addProduct, deleteProduct } from '../controllers/shoppingCart'

const router = express.Router();

router.get('/shopping-cart', products);
router.post('/shopping-cart', addProduct);
router.delete('/shopping-cart/:id', deleteProduct);

export { router as shoppingCartRouter }
