import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ItemListContainer } from '../Screens/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../Screens/ItemDetailContainer/ItemDetailContainer.js';
import { Cart } from '../Screens/CartContainer/CartContainer.js';
import { dataProd } from '../Services/DataProductos.js';
export const Router = () => {
    return (<>
        <Switch>
            <Route exact path="/">
                <ItemListContainer productosObjeto={dataProd} />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route path="/category/:id">
                <ItemListContainer productosObjeto={dataProd} />
            </Route>
            <Route path="/item/:id">
                <ItemDetailContainer producto={dataProd} />
            </Route>
        </Switch >
    </>)
}