import React from "react";
import { makeStyles } from "@material-ui/styles";

// prop-types
import PropTypes from "prop-types";

// components
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

// icons
import ClockIcon from "@material-ui/icons/Timer";

// styles
const useStyles = makeStyles((theme) => ({
  media: {
    height: 256,
    borderRadius: theme.spacing(0.5),
  },
  name: {
    fontSize: 18,
  },
  content: {
    flexGrow: 1,
  },
  category: {
    marginRight: theme.spacing(1),
    cursor: "pointer",
    fontSize: 15,
  },
  timeContainer: {
    backgroundColor: "#f5f5f5",
  },
  time: {
    fontSize: 13,
  },
  price: {
    backgroundColor: "#d7d7d7",
  },
  free: {
    backgroundColor: "#f5f5f5",
    fontSize: 14,
  },
  special: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "rgba(0,0,0,0.85)",
    color: "white",
    padding: theme.spacing(0.5, 1),
    borderRadius: "1rem",
  },
}));

const FoodCard = ({
  image,
  name,
  category,
  time,
  price,
  free = "Free Pickup",
  special = "code FREEDINE",
}) => {
  const classes = useStyles();

  const getCategoryRender = () => {
    return (
      <Box display="flex">
        {category.map((cat, index) => {
          const isLast = index === category.length - 1;
          return (
            <Typography
              color={index === 0 ? "primary" : "textPrimary"}
              className={classes.category}
              key={index}
            >{`${cat}${!isLast && "."}`}</Typography>
          );
        })}
      </Box>
    );
  };

  return (
    <Card>
      <CardActionArea>
        <Box position="relative">
          <CardMedia className={classes.media} image={image} />

          {special && (
            <Typography className={classes.special}>{special}</Typography>
          )}
        </Box>
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography className={classes.name}>{name}</Typography>
        {getCategoryRender()}

        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" flex={1}>
            <Box
              className={classes.timeContainer}
              display="inline-flex"
              alignItems="center"
              marginRight="0.25rem"
            >
              <ClockIcon style={{ fontSize: "inherit" }} />
              <Typography className={classes.time}>
                {`${time.min} - ${time.max}`} Mins
              </Typography>
            </Box>

            <Typography className={classes.price} component="span">
              ${price}
            </Typography>
          </Box>

          {free && (
            <Typography className={classes.free} color="primary">
              {free}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

FoodCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  time: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
  price: PropTypes.number.isRequired,
  free: PropTypes.string,
  special: PropTypes.string,
};

export default FoodCard;
