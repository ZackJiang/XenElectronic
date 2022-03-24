import _ from 'lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { MenuAppBar } from '../../shared/MenuAppBar/MenuAppBar';

const Container = styled('div')({
  padding: 40,
});

const Checkout = styled('div')({
  marginTop: 15,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export interface IItem {
  id: string;
  name: string;
  price: number;
}

export const ShoppingCartPage: React.FC = () => {
  const history = useHistory();
  const [items, setItems] = React.useState<IItem[]>([]);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const itemsQuery = React.useCallback(async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/shopping-cart',
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`,
        );
      }
      const newItems = await response.json();

      setItems(
        _.map(newItems, (newItem) => ({
          id: newItem._id,
          name: newItem.product.name,
          price: newItem.product.price,
        })),
      );
    } catch (err) {
      setItems([]);
    }
  }, []);

  React.useEffect(() => {
    itemsQuery();
  }, [itemsQuery]);

  React.useEffect(() => {
    const newTotalPrice = _.sumBy(items, (item) => item.price);
    setTotalPrice(newTotalPrice);
  }, [items]);

  const handleRemoveItemFromShoppingCart = async (itemId: string) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    await fetch(`http://localhost:5000/shopping-cart/${itemId}`, requestOptions);

    const newItems = [...items];
    _.remove(newItems, (newItem) => newItem.id === itemId);
    setItems(newItems);
  };

  return (
    <div>
      <MenuAppBar title="Shopping Cart" path="/" />

      <Container>
        <List>
          {_.map(items, (item) => (
            <div key={_.uniqueId()}>
              <ListItem
                secondaryAction={(
                  <IconButton edge="end" aria-label="delete" onClick={() => { handleRemoveItemFromShoppingCart(item.id); }}>
                    <DeleteIcon />
                  </IconButton>
                )}
              >
                <ListItemText
                  primary={item.name}
                />

                {`$ ${item.price}`}
              </ListItem>

              <Divider />
            </div>
          ))}
        </List>

        <Checkout>
          <span>{`Total Cost: $ ${totalPrice}`}</span>

          <Button
            disabled={totalPrice === 0}
            variant="outlined"
            sx={{ marginLeft: 2 }}
            onClick={() => history.push('/checkout')}
          >
            Checkout
          </Button>
        </Checkout>
      </Container>
    </div>
  );
};
