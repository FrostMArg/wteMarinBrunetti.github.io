import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from "@material-ui/icons/Menu";
import { navBarStyle } from '../NavBarStyle.js';
import { makeStyles } from "@material-ui/core/styles";
import { CardWidget } from '../../CartWidget/CartWidget.js';
import { NavBarItems } from '../NavBarItems/NavBarItems.js';
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
const useStyles = makeStyles((theme) => navBarStyle(theme));
export const NavBarMobile = () => {
    const styles = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>
        <IconButton color="inherit" className={styles.menuButton} edge="start" aria-label="menu" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
        </IconButton>
        <Menu id="fade-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
                <Button color="inherit" onClick={() => history.push(`/wteMarinBrunetti.github.io/`)}>
                    <HomeIcon /> Home
                </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavBarItems />
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Button className={styles.bkNone} color="inherit" onClick={() => history.push(`/wteMarinBrunetti.github.io/cart`)}>
                    <CardWidget className={styles.bkNone} color="inherit" /> Carrito
                </Button>
            </MenuItem>
        </Menu>
    </>
    );
};
