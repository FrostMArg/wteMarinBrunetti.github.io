import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../../../Context/Context.js';
import { TerminarCompraStyles } from './ItemTerminarCompraStyles.js';
const useStyle = makeStyles((theme) => TerminarCompraStyles(theme));
export const ItemTerminarCompra = props => {
    const context = useContext(CartContext);
    const count = props.count;
    const classes = useStyle();
    const { clickCancelar } = props;
    return <div className={classes.generalContainer}>
        <div className={classes.container}>
            <Button className={classes.buttons} onClick={() => clickCancelar(false)}>
                <Link to="/wteMarinBrunetti.github.io/cart" onClick={() => context.addItem(props.producto, count)} className={classes.linkText}> Terminar compra
                </Link>
            </Button>
            <Button className={classes.buttons} onClick={() => clickCancelar(false)}>
                Cancelar
            </Button>
        </div>
    </div >
}