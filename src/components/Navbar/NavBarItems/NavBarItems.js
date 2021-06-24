import React from "react";
import { IconButton, ListItem, ListItemText } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { ItemsMenu } from '../../../Services/DataRutas.js';

const Boton = props => {
    const history = useHistory();
    return <ListItem button onClick={() => history.push(`/category/${props.id}`)} >
        <ListItemText primary={props.id} />
        <IconButton color="inherit"
            arial-label="close">{props.icon}</IconButton>
    </ListItem>
}

const BotonesMenu = props => {
    return props.ItemsMenu.map((detalleBoton, i) => {
        return <Boton key={i} {...detalleBoton} />
    });
}

export const NavBarItems = props => {
    return <BotonesMenu ItemsMenu={ItemsMenu} />
}