import React from "react";
import { useHistory } from 'react-router-dom';
import { ItemsMenu } from '../../../Services/DataRutas.js';
import { Button } from '@material-ui/core';
const Boton = props => {
    const history = useHistory();
    return <Button color="inherit" startIcon={props.icon} onClick={() => history.push(`/category/${props.id}`)}>
        {props.id}
    </Button>
}

const BotonesMenu = props => {
    return props.ItemsMenu.map((detalleBoton, i) => {
        return <Boton key={i} {...detalleBoton} />
    });
}

export const NavBarItems = props => {
    return <BotonesMenu ItemsMenu={ItemsMenu} />
}