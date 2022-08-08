import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import DrawerComponent from "../Drawer/Drawer.js";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
            <CssBaseline/>
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    <Link to="/">
                        UACS
                    </Link>
                </Typography>
                {isMobile ? (
                    <DrawerComponent/>
                ) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/competitions" className={classes.link}>
                            Competitions
                        </Link>
                        <Link to="/login" className={classes.link}>
                            Login
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;