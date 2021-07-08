import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [resp, setResp] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('Cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('Cart')));
        }
    }, []);
    useEffect(() => { localStorage.setItem('Cart', JSON.stringify(cart)); }, [cart]);
    const addItem = (producto, quantity) => {
        if (quantity !== 0 || quantity !== undefined) {
            if (cart.filter((element) => element.id === producto.id).length === 0) {
                setCart([...cart, { producto: producto, quantity: quantity }]);
            }
        }
    };
    const removeItem = (id) => {
        const quitoItem = cart.filter((element) => element.producto.id !== id);
        setCart(quitoItem);
    };
    const isInCart = (id) => {
        if (cart.filter((element) => element.producto.id === id)) {
            setResp("Ya se encuentra en el carrito: " + true);
        } else {
            setResp(false);
        }
    }
    const clearAll = () => setCart([]);
    return (<CartContext.Provider value={{ cart, addItem, removeItem, clearAll, isInCart, resp }}>
        {props.children}
    </CartContext.Provider>
    );
};
