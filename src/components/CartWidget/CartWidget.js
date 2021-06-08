import React from 'react';
import { makeStyles } from '@material-ui/core';
import { cartWidgetStyle } from './CartWidgetStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CardWidget = () => {

    return (

        <IconButton edge="start" color="inherit" aria-label="home">
            <ShoppingCartIcon>
            </ShoppingCartIcon>
        </IconButton>

    )
}