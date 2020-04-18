import React from "react";
import { makeStyles } from "@material-ui/styles";

// assets
import BackgroundImage from "../../assets/images/bg.jpg";

// components
import Box from "@material-ui/core/Box";

export const HERO_HEIGHT = 480;

// styles
const useStyles = makeStyles(() => ({
  root: {
    height: HERO_HEIGHT,
    zIndex: -10
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}));

const Hero = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} position="fixed" top="0" left="0" {...props}>
      <img className={classes.image} src={BackgroundImage} alt="bg" />
    </Box>
  );
};

export default Hero;
