import React from 'react';
import Swal from 'sweetalert2';
import List from '@material-ui/core/List';
import { CartStyle } from './CartStyle.js';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ListItemIcon from '@material-ui/core/ListItemIcon';
const useStyles = makeStyles((theme) => CartStyle(theme));
export const Cart = ({ context, getTotal, getQuantity }) => {
    const classes = useStyles();
    const MensajeAvisoOpciones = (msjTitle, msjText, msjOk, item) => {
        Swal.fire({
            title: msjTitle,
            text: msjText,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'gray',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                context.removeItem(item.producto.id);
                Swal.fire('Eliminado', msjOk, 'success');
            }
        });
    };

    return (<div className={classes.itemsContainer}>
        <List dense className={classes.itemsLista}>
            <span className={classes.centrado}>Productos a comprar:</span>
            <Divider />
            {context.cart.map((item, i) => {
                return (
                    <List key={i} component="nav" aria-label="main cart" className={classes.detalleItem}>
                        <ListItem key={item.producto.id} button  >
                            <ListItemAvatar >
                                <Avatar className={classes.muiAvatarRoot} alt={item.producto.alt} src={item.producto.pictureUrl}
                                />
                            </ListItemAvatar>
                            <ListItemText id={item.producto.id} primary={item.producto.title} secondary={'$ ' + item.producto.price + ' -  Cantidad: ' + item.quantity} />
                        </ListItem>
                        <ListItem className={classes.MuiListItemRoot} button onClick={() => MensajeAvisoOpciones('Desea elimiar ' + item.producto.alt + ' del carrito?', 'Una vez eliminado debera agregarlo de nuevo manualmente', 'Producto eliminado correctamente', item)}>
                            <ListItemIcon> Eliminar
                                <DeleteForeverIcon />
                            </ListItemIcon>
                        </ListItem>
                        <Divider />
                    </List>
                );
            })}
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem className={classes.centrado}>
                    <ListItemText primary={'Cantidad de productos: ' + getQuantity()} />
                    <ListItemText primary={'Total: $ ' + getTotal()} />
                </ListItem>
            </List>
        </List>
    </div >
    );
}