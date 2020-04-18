import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Searchbar from "../Searchbar";
import ReceiveOption from "../ReceiveOption";
import { NAVBAR_HEIGHT } from "../Navbar";

export const ACTIONBAR_HEIGHT = 70;

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    height: ACTIONBAR_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 0 0.5rem rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: NAVBAR_HEIGHT,
    padding: theme.spacing(0, 4),
    zIndex: 1,
  },
  divier: {
    height: "80%",
  },
}));

const ActionBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box>
          <ReceiveOption />
        </Box>
        <Divider
          className={classes.divier}
          orientation="vertical"
          variant="middle"
        />
      </Hidden>

      <Box flex={1}>
        <Searchbar placeholder="Looking for something?" />
      </Box>
    </Box>
  );
};

export default ActionBar;
