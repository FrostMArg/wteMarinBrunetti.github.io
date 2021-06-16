import React from 'react';
import { Item } from '../Item/Item.js';
export const ItemList = (props) => {
    return <> {props.productosListado.map((dataProd, i) => {
        return <Item productos={dataProd} key={i} />
    })}</>
}

