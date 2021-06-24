import React from 'react';
import { Grid, Container, Typography } from "@material-ui/core";
import "./style.css";
import CircularIndeterminate from '../../../Components/Loader/Loader.js';
import { ItemCount } from './ItemCount/ItemCount.js';

export const ItemDetail = ({ status, producto }) => {
    return (<>
        {status === 'Pending' ? (<CircularIndeterminate />) : (
            producto && (<Container className="product-view">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} className="image-wrapper">
                        <img src={producto.pictureUrl} alt={producto.title} />
                    </Grid>
                    <Grid item xs={12} md={4} className="text">
                        <Typography variant="h2">{producto.title}</Typography>
                        <Typography className="parrafo" variant="subtitle2" component="p">{producto.description}</Typography>
                        <Typography variant="h3">Precio: $ {producto.price}</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Typography className="quantity" variant="h6">
                                    Cantidad: {producto.stock}
                                </Typography>
                                <ItemCount producto={producto} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>)
        )}
    </>
    );
};





