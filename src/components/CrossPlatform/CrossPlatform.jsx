import React from "react";
import { makeStyles } from "@material-ui/styles";

// assets
import IOSImage from "../../assets/images/ios_mobile.jpg";
import AndroidImage from "../../assets/images/android_mobile.jpg";
import FullOsImage from "../../assets/images/full_mobile.jpg";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

const SEARCHBAR_HEIGHT = 45;
const ACTIONBAR_RADIUS = "1.5rem";

// styles
const useStyles = makeStyles((theme) => ({
  leftSection: {
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    objectFit: "scale-down",
  },
  inputRoot: {
    backgroundColor: "#D7D7D7",
    borderRadius: ACTIONBAR_RADIUS,
    height: SEARCHBAR_HEIGHT,
    width: "100%",
    display: "flex",
    alignItems: "center",
    maxWidth: "350px",
    margin: "auto",
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
}));

const CrossPlatform = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Hidden xsDown>
        <Grid className={classes.leftSection} item sm={4}>
          <img src={IOSImage} alt="ios mobile" />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={4}>
        <Box>
          <Hidden smUp>
            <img
              className={classes.image}
              src={FullOsImage}
              alt="cross platform mobile"
            />
          </Hidden>
          <Typography align="center" style={{ color: "#a5a5a5" }}>
            CROSS PLATFORM
          </Typography>
          <Typography align="center">
            native <b>MOBILE APPLICATION</b>
          </Typography>
          <Typography align="center">
            <Typography color="primary" component="span">
              Android
            </Typography>
            , <span style={{ color: "#996515" }}>iOS</span>
          </Typography>

          <Typography align="center">
            <span style={{ color: "#996515" }}>HYBRID DESIGN</span>{" "}
            <span style={{ color: "#a5a5a5" }}>Mobile first</span>
          </Typography>

          <Typography align="center">
            <Typography color="primary" component="span">
              INSTALLABLE
            </Typography>{" "}
            WEB APPLICATION
          </Typography>

          <Typography align="center" variant="h6" style={{ color: "#a5a5a5" }} gutterBottom>
            FOR ANY SIZE RESTAURANT
          </Typography>

          <Box className={classes.inputRoot}>
            {/* start input base */}
            <Box className={classes.inputContainer}>
              <InputBase
                placeholder={"e.g. +18774667373"}
                className={classes.input}
              />
            </Box>
            {/* end input base */}

            {/* start end button */}
            <Button
              className={classes.endButton}
              variant="contained"
              color="primary"
            >
              Text Me demo App
            </Button>
            {/* end end button */}
          </Box>
        </Box>
      </Grid>

      <Grid item sm={4}>
        <Hidden xsDown>
          <img src={AndroidImage} alt="android mobile" />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default CrossPlatform;
