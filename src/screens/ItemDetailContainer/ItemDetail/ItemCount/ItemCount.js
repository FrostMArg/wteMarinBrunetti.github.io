import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { stylesItems } from './ItemCountStyle';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../Context/Context.js';
const useStyles = makeStyles((theme) => stylesItems(theme));

export const ItemCount = ({ producto }) => {
    const context = useContext(CartContext);
    const { id, stock, title } = producto;
    const styles = useStyles();
    // eslint-disable-next-line
    const [buttonToggle, setButtonToggle] = useState(false);
    const [count, setCount] = useState(0);
    const restarItem = () => {
        if (count !== 0) {
            setCount(count - 1);
            if (count === 1) {
                setButtonToggle(true);
            }
        }
    };

    const sumarItem = () => {
        if (count !== stock) {
            setCount(count + 1);
            setButtonToggle(false);
        } else {
            console.log('Cantidad superior al stock actual');
        }
    };

    return (<section className={styles.container}>
        <Typography variant="body2" color="textSecondary" component="p">
            {count === stock && <label className={styles.centrado}>No hay stock suficiente!</label>}
        </Typography>
        <div className={styles.inputGroup}>
            <label>Cnt:</label>
            <span>{count}</span>
            <div className={styles.inputGroup} onClick={e => sumarItem()} aria-label="sumar">
                <IconButton >
                    <AddCircleOutlineIcon />
                </IconButton>
            </div>
            <div className={styles.inputGroup} onClick={e => restarItem()} aria-label="restar">
                <IconButton  >
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </div>
            <div className={styles.inputGroup}>
                <Link
                    to="/cart"
                    onClick={() => context.addItem(id, title, count)}
                > Agregar producto
                    <IconButton >
                        <AddShoppingCartIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    </section >)
}
