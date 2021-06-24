import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = ({ producto }) => {
    const [promStatus, setPromStatus] = useState('Pending');
    const [productoDetalle, setProductoDetalle] = useState([]);
    const productoID = useParams();
    useEffect(() => {
        const emulateFetch = () => {
            const findItems = new Promise((resolve, reject) => {
                setTimeout(() => { producto ? resolve(producto) : reject('No se encontraron productos'); }, 2000);
            });
            findItems.then((res) => {
                const filtered = res.filter((producto, i) => producto.id.toString() === productoID.id);
                setProductoDetalle(filtered[0]);
                setPromStatus('Success');
            }).catch((err) => { setPromStatus('Failed: ' + err); });
        };
        emulateFetch();
    }, [productoID, productoDetalle, producto]);
    return (<ItemDetail status={promStatus} producto={productoDetalle} />);
};