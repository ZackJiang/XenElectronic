import _ from 'lodash';
import React from 'react';
import { styled } from '@mui/system';
import { MenuAppBar } from './MenuAppBar';
import { Products } from './Products';

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
        'http://localhost:5000/products',
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`,
        );
      }
      const newProducts = await response.json();

      setProducts(
        _.map(newProducts, (newProduct) => ({
          id: newProduct._id,
          name: newProduct.name,
          category: newProduct.category,
          description: newProduct.description,
          price: newProduct.price,
        })),
      );
    } catch (err) {
      setProducts([]);
    }
  }, []);

  const productsInShoppingCartQuery = React.useCallback(async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/shopping-cart',
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`,
        );
      }
      const newProducts = await response.json();
      setNumOfProductsInShoppingCart(newProducts.length);
    } catch (err) {
      setNumOfProductsInShoppingCart(0);
    }
  }, []);

  React.useEffect(() => {
    productsQuery();
    productsInShoppingCartQuery();
  }, [productsQuery, productsInShoppingCartQuery]);

  return (
    <div>
      <MenuAppBar numOfProductsInShoppingCart={numOfProductsInShoppingCart} />

      <Container>
        <Products products={products} />
      </Container>
    </div>
  );
};
