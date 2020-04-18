import React from "react";
import { makeStyles } from "@material-ui/styles";

// prop-types
import PropTypes from "prop-types";

// components
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

// icons
import SearchIcon from "@material-ui/icons/Search";

export const SEARCHBAR_HEIGHT = 45;

// styles
const useStyles = makeStyles((theme) => {
  const ACTIONBAR_RADIUS = "1.5rem";
  return {
    root: {
      backgroundColor: "#D7D7D7",
      borderRadius: ACTIONBAR_RADIUS,
      height: SEARCHBAR_HEIGHT,
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    startButton: {
      borderRadius: `${ACTIONBAR_RADIUS} 0 0 ${ACTIONBAR_RADIUS}`,
      height: "100%",
    },
    inputContainer: {
      flex: 1,
      padding: theme.spacing(0, 2),
    },
    input: {
      width: "100%",
    },
    endButton: {
      borderRadius: `0 ${ACTIONBAR_RADIUS} ${ACTIONBAR_RADIUS} 0`,
      height: "100%",
    },
  };
});

const Searchbar = ({ placeholder }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* start start button */}
      <Button
        className={classes.startButton}
        variant="contained"
        color="secondary"
      >
        All
      </Button>
      {/* end start button */}

      {/* start input base */}
      <Box className={classes.inputContainer}>
        <InputBase placeholder={placeholder} className={classes.input} />
      </Box>
      {/* end input base */}

      {/* start end button */}
      <Button className={classes.endButton} variant="contained" color="primary">
        <SearchIcon />
      </Button>
      {/* end end button */}
    </Box>
  );
};

Searchbar.propTypes = {
  placeholder: PropTypes.string,
};

export default Searchbar;
