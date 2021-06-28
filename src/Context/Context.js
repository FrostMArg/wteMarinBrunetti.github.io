import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('Cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('Cart')));
            console.log('Items del carrito', JSON.parse(localStorage.getItem('Cart')));
        }
    }, []);
    useEffect(() => { localStorage.setItem('Cart', JSON.stringify(cart)); }, [cart]);
    const addItem = (id, item, quantity) => {
        console.log(id, item, quantity);
        if (quantity !== 0 || quantity !== undefined) {
            if (cart.filter((element) => element.id === id).length === 0) {
                setCart([...cart, { id: id, item: item, quantity: quantity }]);
            }
        }
    };
    const removeItem = (id) => {
        const quitoItem = cart.filter((element) => element.id !== id);
        setCart(quitoItem);
    };
    const clearAll = () => setCart([]);
    return (<CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
        {props.children}
    </CartContext.Provider>
    );
};
