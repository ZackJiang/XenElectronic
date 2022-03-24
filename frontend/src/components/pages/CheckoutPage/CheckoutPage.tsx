import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { MenuAppBar } from '../../shared/MenuAppBar/MenuAppBar';

const stripePromise = loadStripe('pk_test_51JG9vUHWxayBGUAXy2gez393nGgms7zDlDh24CHnSsa7DyfKT3Q6rkwqGbEbe01LxtGdcWCRy6IujYoEjkeeHqWK00aq9Sdmy5');

const Container = styled('div')({
  padding: 40,
  width: 500,
  margin: 'auto',
});

export const CheckoutPage: React.FC = () => (
  <div>
    <MenuAppBar title="Checkout" path="/shopping-cart" />

    <Container>
      <Elements stripe={stripePromise}>
        <Grid container spacing={2} sx={{ border: 2, padding: 2 }}>
          <Grid item xs={12} sx={{ borderBottom: 2 }}>
            <span>Card Number</span>

            <CardNumberElement
              onFocus={() => {}}
              onBlur={() => {}}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={12} sx={{ borderBottom: 2 }}>
            <span>Expiry Date</span>

            <CardExpiryElement
              onFocus={() => {}}
              onBlur={() => {}}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={12} sx={{ borderBottom: 2 }}>
            <span>CCV</span>

            <CardCvcElement
              onFocus={() => {}}
              onBlur={() => {}}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={() => {}}
            >
              Place an order
            </Button>
          </Grid>

        </Grid>
      </Elements>
    </Container>
  </div>
);
