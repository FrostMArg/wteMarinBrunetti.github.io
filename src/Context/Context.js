import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cntProducto, setCntProducto] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('Cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('Cart')));
        }
    }, []);
    useEffect(() => { localStorage.setItem('Cart', JSON.stringify(cart)); }, [cart]);
    const addItem = (producto, quantity) => {
        if (quantity !== 0 || quantity !== undefined) {
            setCntProducto(cntProducto + quantity);
            const existe = cart.find(itemCart => itemCart.producto.id === producto.id);
            if (existe) {
                const updateCntProd = existe.quantity + quantity;
                existe.quantity = updateCntProd;
                setCart(cart);
            } else {
                setCart([...cart, { producto: producto, quantity: quantity }]);
            }
        }
    };

    const removeItem = (id) => {
        const quitoItem = cart.filter((element) => element.producto.id !== id);
        setCart(quitoItem);
    };

    const clearAll = () => setCart([]);
    return (<CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
        {props.children}
    </CartContext.Provider>
    );
};
