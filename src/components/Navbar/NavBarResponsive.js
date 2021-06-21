// IMPORTING APIS
import React from "react";
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery, Button, useScrollTrigger, Slide, Menu, MenuItem, ListItemIcon } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import logo from '../../images/logoHorizontalBlanco.png';
// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";

// REACT APP IMPORTS
// import Home from "./Pages/Home";
// import College from "./Pages/College";
// import About from "./Pages/About";
// import Personal from "./Pages/Personal";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <BrowserRouter>
                    <AppBar>
                        <Toolbar>
                            <MenuItem
                                onClick={() => setAnchorEl(null)}
                                component={Link}
                                to={process.env.PUBLIC_URL + "/Auriculares"}
                            >
                                <Typography variant="h5"
                                    component="p"
                                    color="textSecondary"
                                    className={classes.title}> <IconButton edge="start" color="inherit" aria-label="home">
                                        <img src={logo} alt="LogoWizardTechStore"></img>
                                    </IconButton></Typography>
                            </MenuItem>
                            {isMobile ? (
                                <>
                                    <IconButton
                                        color="textPrimary"
                                        className={classes.menuButton}
                                        edge="start"
                                        aria-label="menu"
                                        onClick={handleMenu}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        KeepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={open}
                                    >
                                        <MenuItem
                                            onClick={() => setAnchorEl(null)}
                                            component={Link}
                                            to={process.env.PUBLIC_URL + "/Auriculares"}
                                        >
                                            <Typography variant="h6"> Auriculares</Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchorEl(null)}
                                            component={Link}
                                            to={process.env.PUBLIC_URL + "/Mouse"}
                                        >

                                            <Typography variant="h6"> Mouse </Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <div style={{ marginRight: "2rem" }}>
                                    <Button variant="text" color="default"
                                        component={Link}
                                        to={process.env.PUBLIC_URL + "/Auriculares"}
                                        onClick={() => setAnchorEl(null)}>
                                        Auriculares
                                    </Button>
                                    <Button variant="text" color="default" component={Link}
                                        onClick={() => setAnchorEl(null)}
                                        to={process.env.PUBLIC_URL + "/Mouse"}>
                                        Mouse
                                    </Button>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + "/"} />
                        {/* component={Home} component={College} component={About} component={Personal}*/}
                        <Route exact path={process.env.PUBLIC_URL + "/College"} />
                        <Route exact path={process.env.PUBLIC_URL + "/About"} />
                    </Switch>
                </BrowserRouter>
            </HideOnScroll>
        </div>
    );
};

export default Header;