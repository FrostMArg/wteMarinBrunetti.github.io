import React, { useState, useEffect } from 'react';
import { Item } from '../Item/Item.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { itemListStyles } from './ItemListStyles'
import LinearProgress from '@material-ui/core/LinearProgress';
// Importo las imagenes, no se si existe una forma mas facil pero esta funciona jaja Ale, esto esta bien? Salvameeeee jajajaj
import LogitechGProXSuperLight from '../../images/productos/LogitechGProXWirelessMouse.png';
import CorsairHarpoonRGBWirelessMouse from '../../images/productos/CorsairHarpoonRGBWirelessMouse.png';
import steelSeriesRival3Mouse from '../../images/productos/steelSeriesRival3Mouse.png';
import LogitechGProXHeadsetWireless from '../../images/productos/LogitechGProXHeadsetWireless.png';
import HyperXHeadsetCloud2Wireless from '../../images/productos/HyperXHeadsetCloud2Wireless.png';
import SteelSeriesArctis9X from '../../images/productos/SteelSeriesArctis9X.png';
import GloriousModelOMouse from '../../images/productos/GloriousModelOMouse.png';
import RazerDeathAdderV2Mouse from '../../images/productos/RazerDeathAdderV2Mouse.png';
import RazerBlackSharkV2Headset from '../../images/productos/RazerBlackSharkV2Headset.png';
const useStyle = makeStyles((theme) => itemListStyles(theme));

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            [
                {
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
                },
                {
                    id: 1,
                    alt: "Mouse Harpoon RGB Wireless",
                    title: "Mouse Harpoon RGB Wireless",
                    modelo: "Harpoon RGB Wireless",
                    marca: "Corsair",
                    categoria: "Gaming Mouse",
                    stock: 30,
                    price: 16000,
                    description: "El ratón para juegos CORSAIR HARPOON RGB WIRELESS le permite elegir cómo jugar, con la capacidad de conectarse fácilmente al PC a través de una tecnología ultrarrápida, la TECNOLOGÍA SLIPSTREAM CORSAIR WIRELESS en menos de 1 ms, Bluetooth o conexión por cable USB.",
                    descShort: "El ratón para juegos CORSAIR HARPOON RGB WIRELESS le permite elegir cómo jugar, con la capacidad de... ",
                    pictureUrl: CorsairHarpoonRGBWirelessMouse
                },
                {
                    id: 2,
                    alt: "Mouse Rival 3",
                    title: "Mouse Rival 3",
                    modelo: "Rival 3",
                    marca: "SteelSeries",
                    categoria: "Gaming Mouse",
                    stock: 3,
                    price: 8300,
                    description: "El mouse rival 3 tiene el mejor rendimiento en su clase gracias a un sensor óptico de juegos con núcleo de movimiento verdadero de grado de torneo que está diseñado a medida en colaboración con el fabricante de sensores líder en la industria pixart materiales hiperdurables la vida útil del mouse que está calificado para 60 millones de clics en una construcción liviana, un sistema RGB rediseñado proporciona la iluminación dinámica más brillante en cualquier mouse de la serie de acero, lo que hace que el rival 3 se destaque tanto en estilo como en rendimiento.",
                    descShort: "El mouse rival 3 tiene el mejor rendimiento en su clase gracias a un sensor óptico de juegos con núcleo de movimiento...",
                    pictureUrl: steelSeriesRival3Mouse
                },
                {
                    id: 3,
                    alt: "Logitech G PRO X Wireless",
                    title: "Logitech G PRO X Wireless",
                    modelo: "G Pro X Wireless Heatset",
                    marca: "Logitech",
                    categoria: "Headset",
                    stock: 9,
                    price: 21000,
                    description: "Los auriculares PRO de Logitech G están diseñados con y para profesionales de los deportes electrónicos.Las horquillas de aluminio, la diadema de acero y la espuma viscoelástica y las almohadillas para la cabeza y los oídos de cuero sintético de primera calidad lo mantienen cómodo durante las sesiones de entrenamiento y competencia maratón.Los controladores Pro- G de 50 mm ofrecen un audio increíblemente preciso con una respuesta de graves mejorada.El DAC USB avanzado tiene un ecualizador integrado de cinco bandas que se puede programar a través del software G HUB con la configuración de sus profesionales de deportes electrónicos favoritos.El micrófono boom desmontable y afinado profesionalmente con pantalla antiviento y filtro pop garantiza que sus comunicaciones sean nítidas.Diseñado para PC.Impedancia: 35 ohmios.",
                    descShort: "Los auriculares PRO de Logitech G están diseñados con y para profesionales de los deportes electrónicos...",
                    pictureUrl: LogitechGProXHeadsetWireless
                },
                {
                    id: 4,
                    alt: "Hyperx Cloud Wireless 2",
                    title: "Hyperx Cloud Wireless 2",
                    modelo: "Cloud Wireless 2 heatset",
                    marca: "Kingston Hyperx",
                    categoria: "Headset",
                    stock: 20,
                    price: 14000,
                    description: "El HyperX Cloud II fue diseñado para ser un auricular de juego ultra cómodo con un sonido excelente. Hemos pensado mucho en los detalles de nuestra espuma viscoelástica HyperX, la piel sintética de primera calidad, la fuerza de sujeción y la distribución del peso. No es de extrañar que se convierta en el auricular preferido para millones de jugadores. Estamos orgullosos de presentar HyperX Cloud II Wireless. Con una rápida conexión inalámbrica de 2,4 GHz, una batería de larga duración de 30 horas y un alcance inalámbrico de hasta 65.6 ft, tendrás más que un día completo de comodidad y libertad inalámbrica. Los controladores de 2.087 in ofrecen un sonido impresionante, con sonido envolvente virtual 7.1 para mejorar el audio posicional disponible con solo tocar un botón. Es compatible con PC, PlayStation 4 y Nintendo Switch, por lo que puedes tomar los buenos momentos en todas las plataformas.",
                    descShort: "El HyperX Cloud II fue diseñado para ser un auricular de juego ultra cómodo con un sonido excelente...",
                    pictureUrl: HyperXHeadsetCloud2Wireless
                },
                {
                    id: 5,
                    alt: "SteelSeries Arctis 9X",
                    title: "SteelSeries Arctis 9X",
                    modelo: "Arctis 9X",
                    marca: "SteelSeries",
                    categoria: "Headset",
                    stock: 2,
                    price: 28000,
                    description: "Desde los creadores de la línea de auriculares más galardonada en la historia de los juegos, thearctis9x combina la comodidad de la conexión inalámbrica Xbox integrada con audio Bluetooth simultáneo para una verdadera conexión inalámbrica en todas partes.Con el micrófono bidireccional con cancelación de ruido y sorprendentemente detalladaarctissound, thearctis9x es el auricular inalámbrico de primera calidad para los jugadores de Xbox.",
                    descShort: "Desde los creadores de la línea de auriculares más galardonada en la historia de los juegos...",
                    pictureUrl: SteelSeriesArctis9X
                },
                {
                    id: 6,
                    alt: "Glorious Model O",
                    title: "Glorious Model O",
                    modelo: "Model O",
                    marca: "Glorious",
                    categoria: "Gaming Mouse ",
                    stock: 10,
                    price: "7000",
                    description: "La forma y el tamaño son críticos en la selección del ratón, por lo que el equipo Glorious PC Gaming Race ha desarrollado el Model O! El nuevo ratón modelo O-Gaming es diferente del hermano mayor en términos de peso y tamaño. Perfecto para manos más pequeñas, todavía ofrece el máximo rendimiento con un peso de solo 2.08 oz! El peso ligero es posible gracias a los panales muy llamativos. Bajo los panales sale la iluminación RGB y completa la configuración de juego perfectamente y lo convierte en el centro de atención para la próxima fiesta LAN. Características ratón ambidiestro para juegos de torneo con seis botones programables Sensor óptico preciso con 12000 DPI 1000 Hz velocidad de votación aceleración hasta 50 G posible Modern Glides flexible y seguro superficie de la alfombrilla de cable",
                    descShort: "La forma y el tamaño son críticos en la selección del ratón, por lo que el equipo Glorious...",
                    pictureUrl: GloriousModelOMouse
                },
                {
                    id: 7,
                    alt: "Razer DeathAdder V2",
                    title: "Razer DeathAdder V2",
                    modelo: "DeathAdder V2",
                    marca: "Razer",
                    categoria: "Gaming Mouse",
                    stock: 15,
                    price: 8700,
                    description: "With over 10 million Razer DeathAdders sold, the most celebrated and awarded gaming mouse in the world has earned its popularity through its exceptional ergonomic design. Perfectly suited for a palm grip, it also works well with claw and fingertip styles. The Razer DeathAdder V2 continues this legacy, retaining its signature shape while shedding more weight for quicker handling to improve your gameplay. Going beyond conventional office ergonomics, the optimized design also provides greater comfort for gaming—important for those long raids or when you’re grinding your rank on ladder.",
                    descShort: "With over 10 million Razer DeathAdders sold, the most celebrated and awarded gaming ...",
                    pictureUrl: RazerDeathAdderV2Mouse
                },
                {
                    id: 8,
                    alt: "Razer BlackShark V2 Headset",
                    title: "Razer BlackShark V2 Headset",
                    modelo: "BlackShark V2",
                    marca: "Razer",
                    categoria: "Headset",
                    stock: 5,
                    price: 18400,
                    description: "If esports is everything, give it your all with the Razer BlackShark V2. Introducing a triple threat of amazing audio, superior mic clarity and supreme sound isolation. Fitted with titanium-coated drivers, a USB sound card, softer ear cushions and THX Spatial Audio, your time to turn pro is now.",
                    descShort: "If esports is everything, give it your all with the Razer BlackShark V2...",
                    pictureUrl: RazerBlackSharkV2Headset
                }
            ]
        ), 2000);
    });
};

export const ItemList = () => {
    const styles = useStyle();
    const [data, setData] = useState([]);

    const ejecutarItemList = () => {
        myPromise().then(dataProductos => {
            setData(dataProductos);
        });
    };
    useEffect(() => { ejecutarItemList(); }, []);

    return <>
        {
            data.length === 0 ? (<div className={styles.root}><LinearProgress /></div>) : (
                <Grid container>
                    <Grid item xs={12} >
                        <Grid container justify="center" >
                            {data.map((producto) => <Item key={producto.id}
                                id={producto.id}
                                alt={producto.alt}
                                title={producto.title}
                                price={producto.price}
                                stock={producto.stock}
                                pictureUrl={producto.pictureUrl}
                                description={producto.description}
                                descShort={producto.descShort}
                            />)}
                        </Grid>
                    </Grid>
                </Grid>
            )
        }
    </>
}