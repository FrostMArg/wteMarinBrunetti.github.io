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
        <Route exact path="/cart">
            <CartContainer />
        </Route>
        <Route path="/category/:id">
            <ItemListContainer />
        </Route>
        <Route path="/item/:id">
            <ItemDetailContainer />
        </Route>
    </Switch >)
}