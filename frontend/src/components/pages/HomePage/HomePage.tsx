import _ from 'lodash';
import React from 'react';
import { MenuAppBar } from './MenuAppBar';
import { Products } from './Products';
import { styled } from '@mui/system';

export interface IProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
}

const Container = styled('div')({
  padding: 40,
});

export const HomePage: React.FC = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [numOfProductsInShoppingCart, setNumOfProductsInShoppingCart] = React.useState<number>(0);

  const productsQuery = React.useCallback(async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/products'
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let products = await response.json();

      setProducts(
        _.map(products, product => ({
          id: product._id,
          name: product.name,
          category: product.category,
          description: product.description,
          price: product.price,
        }))
      );
    
    } catch(err) {
      setProducts([]);
    }
  }, []);

  const productsInShoppingCartQuery = React.useCallback(async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/shopping-cart'
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let products = await response.json();
      setNumOfProductsInShoppingCart(products.length);
    
    } catch(err) {
      setNumOfProductsInShoppingCart(0);
    }
  }, []);

  React.useEffect(() => {
    productsQuery();
    productsInShoppingCartQuery();
  }, [productsQuery, productsInShoppingCartQuery])

  return <>
    <MenuAppBar numOfProductsInShoppingCart={numOfProductsInShoppingCart}/>

    <Container>
      <Products  products={products}/>
    </Container>
  </>
}

