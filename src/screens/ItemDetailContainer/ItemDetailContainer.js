import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';

import { dataBase } from '../../Firebase/firebase.js';

export const ItemDetailContainer = ({ producto }) => {
    const [promStatus, setPromStatus] = useState(false);
    const [productoDetalle, setProductoDetalle] = useState([]);
    const productoID = useParams();


    useEffect(() => {
        const productosDb = dataBase.collection('productos');
        const producto = productosDb.doc(productoID.id);
        producto.get()
            .then((doc) => {
                if (!doc.exists) {
                    setProductoDetalle(404);
                    console.log('No existe');
                    return;
                }
                setProductoDetalle({ ...doc.data(), id: doc.id });
            })
            .catch((error) => console.log('Error: ' + error))
            .finally(() => setPromStatus(true));
    }, [productoID]);

    return (<ItemDetail status={promStatus} producto={productoDetalle} />);
};