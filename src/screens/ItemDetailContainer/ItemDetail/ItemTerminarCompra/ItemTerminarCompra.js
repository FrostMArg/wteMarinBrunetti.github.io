import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TerminarCompraStyles } from './ItemTerminarCompraStyles.js';
import { CartContext } from '../../../../Context/Context.js';
import { Button } from '@material-ui/core';
const useStyle = makeStyles((theme) => TerminarCompraStyles(theme));
export const ItemTerminarCompra = props => {
    const context = useContext(CartContext);
    const { id } = props.producto;
    const count = props.count;
    const classes = useStyle();
    const { clickCancelar } = props;

    return <div className={classes.generalContainer}>
        <div className={classes.container}>
            <Button className={classes.buttons} onClick={() => clickCancelar(false)}>
                <Link to="/cart" onClick={() => context.addItem(props.producto, count)} className={classes.linkText}> Terminar compra
                </Link>
            </Button>
            <Button className={classes.buttons} onClick={() => clickCancelar(false)}>
                Cancelar
            </Button>
            <Button className={classes.buttons} onClick={() => context.isInCart(id)}>
                Validar
            </Button>
        </div>
    </div >
}