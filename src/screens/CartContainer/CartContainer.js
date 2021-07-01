import React, { useContext } from 'react';
import { Cart } from './Cart/Cart.js';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../Context/Context.js';
import { CartContainerStyle } from './CartContainerStyle.js';
const useStyles = makeStyles((theme) => CartContainerStyle(theme));
export const CartContainer = () => {
    const classes = useStyles();
    const context = useContext(CartContext);
    return (<section className={classes.margin}>
        <Cart context={context} />
    </section>);
};
