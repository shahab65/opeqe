import React from "react";
import { makeStyles } from "@material-ui/styles";

// assets
import GiftCardImage from "../../assets/images/gift_card.jpg";

// components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// styles
const useStyles = makeStyles(() => ({
  leftSection: {
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    objectFit: "scale-down",
  },
  rightSection: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    maxWidth: 480,
  },
}));

const GiftCard = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid className={classes.leftSection} item md={6}>
        <img className={classes.image} src={GiftCardImage} alt="gift card" />
      </Grid>
      <Grid className={classes.rightSection} item md={6}>
        <Box className={classes.textContainer}>
          <Typography variant="h6" align="center" gutterBottom>
            <span style={{ color: "#a5a5a5" }}>Branded</span>{" "}
            <span style={{ color: "#996515" }}>Gift Card</span>
          </Typography>
          <Typography>
            Opeqe provides a wide range of customizable products for reward and
            incentive programs that can meet your restaurant’s goals. Whether
            you are looking to drive the addition of new customers, increase the
            loyalty of existing ones we have a customized solution for you.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GiftCard;
