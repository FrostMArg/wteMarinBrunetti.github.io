import React, { useState } from "react";
import { navBarStyle } from './NavBarStyle';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory, Link } from 'react-router-dom';
import { CardWidget } from '../CartWidget/CartWidget';
import logo from '../../Images/logoHorizontalBlanco.png';
import { NavBarItems } from './NavBarItems/NavBarItems.js';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, IconButton, List, Container, useMediaQuery, Menu, MenuItem } from "@material-ui/core";
const useStyles = makeStyles((theme) => navBarStyle(theme));
export const NavBar = () => {
    const styles = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<AppBar position="static">
        <Toolbar>
            <Container maxWidth="md" className={styles.navbarDisplayFlex}>
                <Link to='/'>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <img src={logo} alt="LogoWizardTechStore"></img>
                    </IconButton>
                </Link>
                {isMobile ? (<>
                    <IconButton color="inherit" className={styles.menuButton} edge="start" aria-label="menu" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu id="fade-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                            <Button color="inherit" startIcon={<HomeIcon />} onClick={() => history.push(`/`)}>
                                Home
                            </Button>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavBarItems />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Button color="inherit" startIcon={<CardWidget color="inherit" />} onClick={() => history.push(`/Cart`)}>
                                Carrito
                            </Button>
                        </MenuItem>
                    </Menu>
                </>
                ) : (<> <List component="nav" aria-labelledby="main navigation" className={styles.navDisplayFlex}>
                    <NavBarItems />
                </List>
                    <CardWidget color="inherit" />
                </>
                )}
            </Container>
        </Toolbar>
    </AppBar >);
};

