import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

// icons
import BasketIcon from "@material-ui/icons/ShoppingBasket";

export const NAVBAR_HEIGHT = 80;

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EFEFEF",
    color: "black",
    height: NAVBAR_HEIGHT,
    padding: theme.spacing(0, 8),
  },
  toolbar: {
    height: "100%",
  },
  button: {
    borderRadius: "1rem",
    margin: theme.spacing(0, 0.5),
    fontSize: 12,
  },
  link: {
    color: "#696969",
    transition: "0.3s ease",
    margin: theme.spacing(0, 0.5),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      borderRadius: "1rem",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.toolbar}>
        {/* start logo section */}
        <Box flex={1}>
          <Typography variant="h5" component="span">
            LOGO
          </Typography>
        </Box>
        {/* end logo section */}

        {/* start toolbar section */}
        <Box display="flex" alignItems="center">
          <Hidden smDown>
            {/* start nav section */}
            <Box marginRight={1}>
              <Button className={classes.link}>Location</Button>
              <Button className={classes.link}>Orders</Button>
              <Button className={classes.link}>Reservations</Button>
            </Box>
            {/* start nav section */}
          </Hidden>

          {/* start auth section */}
          <Box>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Login
            </Button>

            <Hidden smDown>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                Sign Up
              </Button>
            </Hidden>
          </Box>
          {/* end auth section */}
        </Box>
        {/* end toolbar section */}

        <IconButton color="primary">
          <BasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
