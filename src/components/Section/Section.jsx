import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

// styles
const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(4,0),
  },
}));

const Section = ({ children }) => {
  const classes = useStyles();
  return (
    <Box width="100%" marginY="4remp">
      <Divider className={classes.divider} variant="fullWidth" />
      {children}
    </Box>
  );
};

export default Section;
