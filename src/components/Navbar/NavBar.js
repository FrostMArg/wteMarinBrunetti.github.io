import React from "react";
import {
    AppBar, Toolbar, IconButton, List, Container, useMediaQuery,
    Typography, Menu, MenuItem
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from '../../Images/logoHorizontalBlanco.png';
import { navBarStyle } from './NavBarStyle';
import { CardWidget } from '../CartWidget/CartWidget';
import { NavBarItems } from './NavBarItems/NavBarItems.js';
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => navBarStyle(theme));
export const NavBar = () => {
    const styles = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const handleMenu = (e) => {
        setAnchor(e.currentTarget);
    };
    return (<>
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md" className={styles.navbarDisplayFlex}>
                    <Link to='/'>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <img src={logo} alt="LogoWizardTechStore"></img>
                        </IconButton>
                    </Link>
                    {isMobile ? (<>
                        <IconButton color="inherit" className={styles.menuButton} edge="start" aria-label="menu" onClick={handleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchor} anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            KeepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={open} >
                            <MenuItem onClick={() => setAnchor(null)} component={Link} to="/" >
                                <Typography variant="h7">Home<IconButton><HomeIcon /></IconButton></Typography>
                            </MenuItem>
                            <NavBarItems />
                            <MenuItem onClick={() => setAnchor(null)} component={Link} to="/Cart">Carrito<CardWidget /></MenuItem>
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
        </AppBar >
    </>
    );
};
