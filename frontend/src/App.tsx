import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './components/pages/HomePage/HomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage/ShoppingCartPage';
import { CheckoutPage } from './components/pages/CheckoutPage/CheckoutPage';
import './App.css';


const App: React.FC = () => {
 return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shopping-cart" exact component={ShoppingCartPage} />
      <Route path="/checkout" exact component={CheckoutPage} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
