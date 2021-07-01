import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../Context/Context.js';
import { Cart } from './Cart/Cart.js';

const useStyles = makeStyles((theme) => ({
    margin: {
        display: 'flex',
        justifyContent: 'center',
    }
}));
export const CartContainer = () => {
    const classes = useStyles();
    const context = useContext(CartContext);

    return (<>
        <section className={classes.margin}>
            <Cart context={context} />
        </section>
    </>);
};
