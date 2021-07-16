import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CartContainer } from '../Screens/CartContainer/CartContainer.js';
import { ItemListContainer } from '../Screens/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../Screens/ItemDetailContainer/ItemDetailContainer.js';
export const Router = () => {
    return (<Switch>
        <Route exact path="/">
            <ItemListContainer />
        </Route>
        <Route exact path="/wteMarinBrunetti.github.io/">
            <ItemListContainer />
        </Route>
        <Route exact path="/wteMarinBrunetti.github.io/cart">
            <CartContainer />
        </Route>
        <Route path="/wteMarinBrunetti.github.io/category/:id">
            <ItemListContainer />
        </Route>
        <Route path="/wteMarinBrunetti.github.io/item/:id">
            <ItemDetailContainer />
        </Route>
    </Switch >)
}