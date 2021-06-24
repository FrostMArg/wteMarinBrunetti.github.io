import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { cartWidgetStyle } from './CartWidgetStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context.js';
const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CardWidget = () => {
    const styles = useStyles();
    const context = useContext(CartContext);
    console.log(context.cart.length)
    return (<IconButton edge="start" color="inherit" aria-label="home">
        <Link className={styles.linkText} to="/cart">
            {context.cart.length > 0 && (<span className="linkText">{context.cart.length} </span>)}
            <ShoppingCartIcon color="inherit" />
        </Link>
    </IconButton>)
}