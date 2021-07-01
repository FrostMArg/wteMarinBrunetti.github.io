import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
    },
    muiAvatarRoot: {
        width: 120,
        height: 120
    },
    detalleItem: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    centrado: {
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    itemsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "fit-content",
        width: '80%',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 15,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    },
    itemsLista: {
        display: 'flex',
        flexDirection: 'column',
        flexFlow: 'column wrap',
        width: '100%',
    }
}));

export const Cart = ({ context }) => {
    const classes = useStyles();

    const getQuantity = () => {
        let amount = 0;
        context.cart.map((item) => (amount = amount + item.quantity));
        return amount;
    };

    const getTotal = () => {
        let total = 0;
        context.cart.map((item) => (total = total + item.producto.price * item.quantity));
        return total;
    };
    return (<div className={classes.itemsContainer}>
        <List dense className={classes.itemsLista}>
            <span className={classes.centrado}>Nro. Pedido: #123ASD</span>
            <Divider />
            {context.cart.map((item) => {
                return (<>
                    <List component="nav" aria-label="main mailbox folders" className={classes.detalleItem}>
                        <ListItem key={item.producto.id} button >
                            <ListItemAvatar>
                                <Avatar className={classes.muiAvatarRoot} alt={item.producto.alt} src={item.producto.pictureUrl}
                                />
                            </ListItemAvatar>
                            <ListItemText id={item.producto.id} primary={item.producto.title} secondary={'$ ' + item.producto.price + ' -  Cantidad: ' + item.quantity} />
                            <ListItemSecondaryAction>
                                <Button color="inherit" startIcon={<DeleteForeverIcon />} onClick={() => context.removeItem(item.producto.id)} />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </List>
                </>
                );
            })}
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem className={classes.centrado}>
                    <ListItemText primary={'Cantidad de productos: ' + getQuantity()} />
                    <ListItemText primary={'Total: $ ' + getTotal()} />
                </ListItem>
            </List>
        </List>
    </div>

    );
}
