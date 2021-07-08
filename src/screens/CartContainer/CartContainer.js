import React, { useContext, useState, useEffect } from 'react';
import { Cart } from './Cart/Cart.js';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../Context/Context.js';
import { CartContainerStyle } from './CartContainerStyle.js';
import { dataBase } from '../../Firebase/firebase.js';
import { Form } from './Form/Form.js';
import firebase from 'firebase/app';
import '@firebase/firestore';
const useStyles = makeStyles((theme) => CartContainerStyle(theme));
export const CartContainer = () => {
    const classes = useStyles();
    const context = useContext(CartContext);
    const [userInfo, setUserInfo] = useState();
    const [orderId, setOrderId] = useState();
    console.log(context);
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
                setOrderId(id);
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
                };

                updateStock();
            }).catch((err) => {
                //alert('Error: ' + err);
                console.log(err);
            }).then(() => {
                //setModal(true);
                setUserInfo();
                context.clearAll();
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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