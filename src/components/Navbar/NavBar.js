import React from "react";
import { AppBar, Toolbar, IconButton, List, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../../Images/logoHorizontalBlanco.png';
import { navBarStyle } from './NavBarStyle';
import { CardWidget } from '../CartWidget/CartWidget';
import { NavBarItems } from './NavBarItems/NavBarItems.js';
import { Link } from 'react-router-dom';
import { Mouse, Headset } from '@material-ui/icons';
const categorias = [{ title: `Heaset`, icon: <Headset /> },
{ title: `Mouse`, icon: <Mouse /> }];
const useStyles = makeStyles((theme) => navBarStyle(theme));
export const NavBar = () => {
    const styles = useStyles();
    return (<>
        <AppBar position="dinamic">
            <Toolbar>
                <Container maxWidth="md" className={styles.navbarDisplayFlex}>
                    <Link to='/'>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <img src={logo} alt="LogoWizardTechStore"></img>
                        </IconButton>
                    </Link>
                    <List component="nav" aria-labelledby="main navigation" className={styles.navDisplayFlex}>
                        <NavBarItems />
                    </List>
                    <CardWidget> </CardWidget>
                </Container>
            </Toolbar>
        </AppBar >
    </>
    );
};
