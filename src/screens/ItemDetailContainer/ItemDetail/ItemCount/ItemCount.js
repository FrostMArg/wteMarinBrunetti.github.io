import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { stylesItems } from './ItemCountStyle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { ItemTerminarCompra } from '../ItemTerminarCompra/ItemTerminarCompra.js';
const useStyles = makeStyles((theme) => stylesItems(theme));

export const ItemCount = ({ producto, init, cantidadProducto, onAdd, click, clickCancelar }) => {
    const [count, setCount] = useState(init > cantidadProducto ? init : cantidadProducto);
    const styles = useStyles();

    const restarItem = () => { if (count !== 0) { setCount(count - 1); } };

    const sumarItem = () => {
        if (count !== producto.stock) {
            setCount(count + 1);
        } else {
            console.log('Cantidad superior al stock actual');
        }
    };

    return <>
        {click ? <ItemTerminarCompra clickCancelar={clickCancelar} producto={producto} count={count} />
            :
            <section className={styles.container}>
                <div className={styles.inputGroup}>
                    <Typography variant="h4">{count}</Typography>
                    <IconButton onClick={e => sumarItem()} disabled={count < producto.stock ? false : true}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton onClick={e => restarItem()} disabled={count === init ? true : false}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <Button className={styles.buttons} startIcon={<AddShoppingCartIcon />} onClick={() => onAdd(count)} disabled={producto.stock === 0 ? true : false}>
                        Agregar al carrito
                    </Button>
                </div>
            </section >
        }
    </>


}



