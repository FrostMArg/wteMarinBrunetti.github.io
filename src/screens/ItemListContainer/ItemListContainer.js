
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { ItemList } from './ItemList/ItemList.js';

import { dataBase } from '../../Firebase/firebase.js';

export const ItemListContainer = ({ productosObjeto }) => {
    const [promStatus, setPromStatus] = useState('Pending');
    const [productos, setProductos] = useState([]);
    const tipoPeriferico = useParams();

    useEffect(() => {
        setPromStatus('Pending');
        let query;

        if (tipoPeriferico.id) {
            query = dataBase.collection('productos').where('categoria ', '==', tipoPeriferico.id);
        } else { query = dataBase.collection('productos'); }

        query.get().then((querySnapshot) => {
            let productosFiltrados = querySnapshot.docs.map((productos) => {
                console.log(querySnapshot.docs);
                console.log(productos)
                return {
                    ...productos.data(),
                    id: productos.id,
                };
            });
            setProductos(productosFiltrados);
            setPromStatus('Success');
        });
    }, [tipoPeriferico]);

    return <Grid container>
        <Grid item xs={12}>
            <Grid container justify="center" >
                <ItemList status={promStatus} productos={productos} />
            </Grid>
        </Grid>
    </Grid>
};
