import React, { useState } from 'react';
import { Grid, Container, Typography } from "@material-ui/core";
import CircularIndeterminate from '../../../Components/Loader/Loader.js';
import { ItemCount } from './ItemCount/ItemCount.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { ItemDetailStyle } from './ItemDetailStyle.js';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({ status, producto }) => {
    const classes = useStyles();
    const [click, setClick] = useState(false);
    const [cantidadProducto, setCantidadProducto] = useState(0);
    const onAdd = count => {
        setCantidadProducto(count);
        setClick(true);
    };

    const clickCancelar = e => {
        setClick(false);
    };

    return (<>
        {status === 'Pending' ? (<CircularIndeterminate />) : (
            producto && (<Container className={classes.gridContainer} >
                <Grid className={classes.root} container item xs={12} direction="row" justify="center" alignItems="center" spacing={2}>
                    <Card className={classes.cardRoot}>
                        <CardMedia className={classes.cover} component='img' image={producto.pictureUrl} title={producto.title} />
                        <div className={classes.details}>
                            <CardContent>
                                <Typography variant="h2" className={classes.title}>{producto.title}</Typography>
                                <Typography className={classes.parrafo} variant="subtitle2" component="p">{producto.description}</Typography>
                                <Typography className={classes.price} variant="h3">Precio: $ {producto.price}</Typography>
                                <Typography className={classes.quantity} variant="h6">Stock actual: {producto.stock}</Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <ItemCount producto={producto} init={1} cantidadProducto={cantidadProducto} onAdd={onAdd} click={click} clickCancelar={clickCancelar} />
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Container>)
        )}
    </>
    );
};










