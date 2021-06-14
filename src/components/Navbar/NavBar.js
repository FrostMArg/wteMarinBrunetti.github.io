import React from "react";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../../images/logoHorizontalBlanco.png';
import { navBarStyle } from './NavBarStyle';
import { CardWidget } from '../../components/CartWidget/CartWidget'
const navLinks = [
    { title: `Tienda`, path: `/` },
    { title: `Contacto`, path: `/` },
    { title: `Otro`, path: `/` }
];
// Uso los styles del archivo js
const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = () => {
    const styles = useStyles();
    return (<>
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md" className={styles.navbarDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <img src={logo} alt="LogoWizardTechStore"></img>
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={styles.navDisplayFlex}>
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title} className={styles.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                    </List>
                    <CardWidget> </CardWidget>
                </Container>
            </Toolbar>
        </AppBar >
    </>
    );
};
