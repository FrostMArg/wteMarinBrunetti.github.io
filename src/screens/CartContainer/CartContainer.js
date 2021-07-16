import React, { useContext, useState, useEffect } from 'react';
import '@firebase/firestore';
import Swal from 'sweetalert2';
import firebase from 'firebase/app';
import { Cart } from './Cart/Cart.js';
import { Form } from './Form/Form.js';
import { dataBase } from '../../Firebase/firebase.js';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../Context/Context.js';
import { CartContainerStyle } from './CartContainerStyle.js';
const useStyles = makeStyles((theme) => CartContainerStyle(theme));
export const CartContainer = () => {
    const classes = useStyles();
    const context = useContext(CartContext);
    const [userInfo, setUserInfo] = useState();
    // eslint-disable-next-line 
    const [orderId, setOrderId] = useState();
    const ClearValues = () => {
        document.getElementById("formularioUsuario").reset();
    }
    useEffect(() => {
        if (userInfo) {
            const orders = dataBase.collection('orders');
            const newOrder = {
                buyer: userInfo,
                items: context.cart,
                date: new Date(),
                total: getTotal(),
            };
            orders.add(newOrder).then(({ id }) => {
                const updateCntProducto = dataBase.collection('productos').where(
                    firebase.firestore.FieldPath.documentId(),
                    'in',
                    context.cart.map((i) => i.producto.id)
                );
                const updateStock = async () => {
                    const query = await updateCntProducto.get();
                    const batch = dataBase.batch();
                    query.docs.forEach((docSnapshot, idx) => {
                        batch.update(docSnapshot.ref, {
                            stock: docSnapshot.data().stock - context.cart[idx].quantity,
                        });
                    });
                    batch.commit();
                    setOrderId(id);
                    ClearValues();
                    Swal.fire('Felicitaciones!', 'Su id de pedido es: ' + id, 'success');
                };
                updateStock(id);
            }).catch((err) => {
                Swal.fire('Error!', err, 'error');
            }).then(() => {
                setUserInfo();
                context.clearAll();
            });
        }
        // eslint-disable-next-line 
    }, [userInfo]);
    const getQuantity = () => {
        let cantidadTotal = 0;
        context.cart.map((item) => (cantidadTotal = cantidadTotal + item.quantity));
        return cantidadTotal;
    };
    const getTotal = () => {
        let precioTotal = 0;
        context.cart.map((item) => (precioTotal = precioTotal + item.producto.price * item.quantity));
        return precioTotal;
    };
    return (<section className={classes.margin}>
        <Cart context={context} getTotal={getTotal} getQuantity={getQuantity} />
        <Form setUserInfo={setUserInfo} />
    </section>);
};