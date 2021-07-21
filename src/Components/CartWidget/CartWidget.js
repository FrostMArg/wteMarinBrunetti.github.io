import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { CartContext } from '../../Context/Context.js';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; export const CardWidget = () => {
    const history = useHistory();
    const context = useContext(CartContext);
    return (<Button color="inherit" startIcon={<ShoppingCartIcon color="inherit" />} onClick={() => history.push(`/wteMarinBrunetti.github.io/cart`)} >
        {context.cart.length > 0 && (<span className="linkText"> {context.cart.length} </span>)}
    </Button>)
}