import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";
import Navbar, { NAVBAR_HEIGHT } from "../../components/Navbar";
import Hero, { HERO_HEIGHT } from "../../components/Hero";
import Footer from "../../components/Footer";

// styles
const useStyles = makeStyles((theme) => ({
  content: {
    background: "white",
    position: "relative"
  }
}));

const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Hero marginTop={`${NAVBAR_HEIGHT}px`} />

      {/* start content */}
      <Box
        className={classes.content}
        marginTop={`${NAVBAR_HEIGHT + HERO_HEIGHT}px`}
      >
        {children}
      </Box>
      {/* end content */}

      <Footer />
    </Box>
  );
};

export default BaseLayout;
