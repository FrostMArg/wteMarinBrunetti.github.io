import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { stylesItems } from './ItemCountStyle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
const useStyles = makeStyles((theme) => stylesItems(theme));

export const ItemCount = (props) => {
    const styles = useStyles();
    const { cantidad, init } = props;
    const [count, setCount] = useState(init);
    const [buttonToggle, setButtonToggle] = useState(false);

    const palCarrito = (e) => {
        if (count > 0 && count <= cantidad) {
            console.log(`El usuario selecciono ${count} ìtems`);
        }
    };

    const restarItem = () => {
        if (count !== 0) {
            setCount(count - 1);
            if (count === 1) {
                setButtonToggle(true);
            }
        }
    };

    const sumarItem = () => {
        if (count !== cantidad) {
            setCount(count + 1);
            setButtonToggle(false);
        }
    };

    return <section className={styles.container}>
        <div className={styles.inputGroup}>
            <label>Cnt:</label>
            <span>{count}</span>
            {count === cantidad && <label>No hay stock suficiente!</label>}
            <div className={styles.inputGroup} onClick={e => sumarItem()} aria-label="sumar">
                <IconButton >
                    <AddCircleOutlineIcon />
                </IconButton>
            </div>
            <div className={styles.inputGroup} onClick={e => restarItem()} aria-label="restar">
                <IconButton >
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </div>
            <div className={styles.inputGroup} disabled={buttonToggle} onClick={e => count === 0 ? undefined : palCarrito()}>
                <IconButton>
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </div>
    </section >

}