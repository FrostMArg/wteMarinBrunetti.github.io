import React from 'react';
import { Grid, Container, Typography } from "@material-ui/core";
import "./style.css";

export const ItemDetail = ({ item }) => {
    return (
        <Container className="product-view">
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} className="image-wrapper">
                    <img src={item.pictureUrl} alt={item.title} />
                </Grid>
                <Grid item xs={12} md={4} className="text">
                    <Typography variant="h2">{item.title}</Typography>
                    <Typography className="parrafo" variant="p">{item.description}</Typography>
                    <Typography variant="h3">Precio: {item.price}</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography className="quantity" variant="h8">
                                Cantidad: {item.stock}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

