
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { ItemList } from './ItemList/ItemList.js';
import { itemListStyles } from './ItemList/ItemListStyles.js';
import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles((theme) => itemListStyles(theme));
export const ItemListContainer = ({ productosObjeto }) => {
    const styles = useStyle();
    const [promStatus, setPromStatus] = useState('Pending');
    const [productos, setProductos] = useState([]);
    const tipoPeriferico = useParams();
    useEffect(() => {
        const promesaProductos = () => {
            let findItems = new Promise((resolve, reject) => {
                setTimeout(() => {
                    productosObjeto.length ? resolve(productosObjeto) : reject('No se encontraron productos');
                }, 1000);
            });
            findItems.then((res) => {
                filterByCategory(res);
                setPromStatus('Success');
            }).catch((err) => { setPromStatus('Failed: ' + err); });
        };
        promesaProductos();
        const filterByCategory = (res) => {
            let productosFiltrados;
            switch (tipoPeriferico.id) {
                case 'Headset': productosFiltrados = res.filter((productos) => productos.categoria === 'Headset');
                    break;
                case 'Mouse': productosFiltrados = res.filter((productos) => productos.categoria === 'Mouse');
                    break;
                default: productosFiltrados = res;
                    break;
            }
            setProductos(productosFiltrados);
        };
    }, [tipoPeriferico, productosObjeto]);
    return (<>
        <Grid container>
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <ItemList status={promStatus} productos={productos} />
                </Grid>
            </Grid>
        </Grid>
    </>);
};
