import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d7d7d7",
    overflow: "hidden",
  },
  cursor: {
    backgroundColor: theme.palette.secondary.main,
    transition: "0.75s ease-in-out",
  },
}));

const CarouselBar = ({ pageCount, currentPage }) => {
  const classes = useStyles();
  const per = (currentPage * 100) / pageCount;

  const getTransform = () => {
    switch (currentPage) {
      case 0:
        return 0;
      case pageCount:
        return 100;
      default:
        return 50;
    }
  };

  const cursorStyle = {
    left: `calc(${per}%)`,
    transform: `translate(-${getTransform()}%)`,
  };
  return (
    <Box className={classes.root} width="100%" position="relative" height={2}>
      <Box
        position="absolute"
        style={cursorStyle}
        className={classes.cursor}
        height={2}
        width={64}
      ></Box>
    </Box>
  );
};

export default CarouselBar;
