import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import CartList from './Pages/CartList';
import Nav from './Components/Nav';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/cart' component={CartList} />
      </Switch>
    </Router>
  );
}

export default Routes;
