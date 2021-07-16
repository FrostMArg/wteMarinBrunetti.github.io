import React from "react";
import { navBarStyle } from './NavBarStyle';
import { Link } from 'react-router-dom';
import { CardWidget } from '../CartWidget/CartWidget';
import logo from '../../Images/logoHorizontalBlanco.png';
import { NavBarItems } from './NavBarItems/NavBarItems.js';
import { NavBarMobile } from './NavBarMobile/NavBarMobile.js';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, List, Container, useMediaQuery } from "@material-ui/core";
const useStyles = makeStyles((theme) => navBarStyle(theme));
export const NavBar = () => {
    const styles = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const NavBarDeskTop = () => {
        return (<>
            <List component="nav" aria-labelledby="main navigation" className={styles.navDisplayFlex}>
                <NavBarItems />
            </List>
            <CardWidget color="inherit" />
        </>)
    }
    return (<AppBar position="static">
        <Toolbar>
            <Container maxWidth="md" className={styles.navbarDisplayFlex}>
                <Link to='/'>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <img src={logo} alt="LogoWizardTechStore"></img>
                    </IconButton>
                </Link>
                {isMobile ? (<NavBarMobile />
                ) : (<NavBarDeskTop />
                )}
            </Container>
        </Toolbar>
    </AppBar >);
};