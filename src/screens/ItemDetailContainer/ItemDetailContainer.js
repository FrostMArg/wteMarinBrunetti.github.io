import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '../../components/Loader/Loader.js';
// Importo las imagenes, no se si existe una forma mas facil pero esta funciona jaja Ale, esto esta bien? Salvameeeee jajajaj
import LogitechGProXSuperLight from '../../images/productos/LogitechGProXWirelessMouse.png';
import { ItemDetail } from './ItemDetail/ItemDetail.js';
const productoUnitario = {
    id: 0,
    alt: "Logitech G Pro X SuperLight",
    title: "Logitech G Pro X SuperLight",
    modelo: "G PRO X SUPERLIGHT",
    marca: 'Logitec',
    categoria: "Gaming Mouse",
    stock: 10,
    price: 18000,
    description: 'Elimina todos los obstáculos para ganar con nuestro mouse inalámbrico PRO más ligero y rápido. El nuevo favorito de los mejores profesionales de esports pesa menos de 63 gramos y se desliza sin apenas fricción. PRO X SUPERLIGHT hace gala de nuestra tecnología de diseño ZERØ OPOSICIÓN, nuestro propósito de eliminar obstáculos y crear una conexión lo más pura posible entre el jugador y el juego.',
    descShort: "Elimina todos los obstáculos para ganar con nuestro mouse inalámbrico PRO más ligero y rápido...",
    pictureUrl: LogitechGProXSuperLight
}
//listado de productos cuando que se trae desde una promesa:

const itemDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productoUnitario), 2000);
    });
}

export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    useEffect(() => {
        setLoading(true);
        itemDetails()
            .then(response => { setLoading(false); setItem(response); })
            .catch(error => console.log(error));
    }, []);
    return (<>
        < Box minHeight="87vh" >
            {loading === true ? <CircularProgress /> : <ItemDetail item={item} />}

        </Box >

    </>
    )
};
