import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { IconButton } from "@material-ui/core";
import { cartWidgetStyle } from './CartWidgetStyle';
import { CartContext } from '../../Context/Context.js';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => cartWidgetStyle(theme));
export const CardWidget = () => {
    const styles = useStyles();
    const context = useContext(CartContext);
    return (<IconButton edge="start" color="inherit" aria-label="home">
        <Link className={styles.linkText} to="/cart">
            {context.cart.length > 0 && (<span className="linkText">{context.cart.length} </span>)}
            <ShoppingCartIcon color="inherit" />
        </Link>
    </IconButton>)
}