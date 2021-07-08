import React from 'react';
import List from '@material-ui/core/List';
import { CartStyle } from './CartStyle.js';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => CartStyle(theme));
export const Cart = ({ context, getTotal, getQuantity }) => {
    const classes = useStyles();
    return (<div className={classes.itemsContainer}>
        <List dense className={classes.itemsLista}>
            <span className={classes.centrado}>Productos a comprar:</span>
            <Divider />
            {context.cart.map((item, i) => {
                return (<List key={i} component="nav" aria-label="main mailbox folders" className={classes.detalleItem}>
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
                </List>);
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
