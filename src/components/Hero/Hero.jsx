import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

// assets
import BackgroundImage from "../../assets/images/bg.jpg";

// components
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

// icons
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

export const HERO_HEIGHT = 480;

// styles
const useStyles = makeStyles(() => ({
  root: {
    height: HERO_HEIGHT,
    width: "100%",
    zIndex: -10,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    bottom: 0,
    left: "50%",
    position: "absolute",
    transform: "translateX(-50%)",
  },
}));

let interval;
const Hero = (props) => {
  const classes = useStyles();

  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
    clearInterval(interval);
    interval = setInterval(() => {
      setActiveDot((prevState) => (prevState + 1) % 3);
    }, 3000);
  };

  useEffect(() => {
    interval = setInterval(() => {
      setActiveDot((prevState) => (prevState + 1) % 3);
    }, 3000);
  }, []);

  return (
    <Box className={classes.root} position="fixed" top="0" left="0" {...props}>
      <Box position="relative" width="80%" height="80%">
        <Fade unmountOnExit in={activeDot === 0}>
          <Box position="absolute" top="0" left="0">
            <Typography gutterBottom variant="h4">
              <b>code FREEDINE</b>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Enjoy $10 Off When you order two or more of Blueberry Pancake
              Breakfast
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              style={{ color: "rgb(105,105,105)" }}
            >
              The Coupon is only applicable for the specific item and can not be
              combine with any other order
            </Typography>
          </Box>
        </Fade>
        <Fade unmountOnExit in={activeDot === 1}>
          <Box position="absolute" top="0" left="0">
            <Typography gutterBottom variant="h4">
              <b>Breakfast Special</b>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Get 15% off when you order 3 or more Blueberry Pancake Breakfast
            </Typography>
          </Box>
        </Fade>

        <Fade unmountOnExit in={activeDot === 2}>
          <Box position="absolute" top="0" left="0">
            <Typography gutterBottom variant="h4">
              <b>Chief Special</b>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Get $10 off when you order $20 or more T-Bone Steak & Eggs
            </Typography>
          </Box>
        </Fade>
      </Box>
      <Box className={classes.buttonContainer}>
        <IconButton color="primary" onClick={() => handleDotClick(0)}>
          {activeDot === 0 ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
        <IconButton color="primary" onClick={() => handleDotClick(1)}>
          {activeDot === 1 ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
        <IconButton color="primary" onClick={() => handleDotClick(2)}>
          {activeDot === 2 ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;
