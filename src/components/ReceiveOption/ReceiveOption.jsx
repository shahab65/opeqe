import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "fit-content",
  },
  delivery: {
    cursor: "pointer",
  },
  seprator: {
    color: "#a5a5a5",
    margin: theme.spacing(0, 1),
  },
  pickup: {
    cursor: "pointer",
  },
  marker: {
    position: "absolute",
    bottom: theme.spacing(-1),
    left: 0,
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    transition: "0.3s ease",
  },
  button: {
    borderRadius: "1rem",
    fontSize: 12,
    margin: theme.spacing(0, 1.5),
  },
  pickupAddress: {
    color: "#a5a5a5",
    cursor: "pointer"
  },
  addressText: {
    color: "#996515",
  },
  deliveryAddress: {
    backgroundColor: "#996515",
    color: "white",
    borderRadius: theme.spacing(2),
    cursor: "pointer",
    padding: theme.spacing(0,1)
  },
}));

const ReceiveOption = ({}) => {
  const classes = useStyles();

  const [option, setOption] = useState(0);
  const [rootWidth, setRootWidth] = useState(0);
  const [deliveryWidth, setDeliveryWidth] = useState(0);
  const [pickupWidth, setPickupWidth] = useState(0);

  // refs
  const rootRef = useRef();
  const deliveryRef = useRef();
  const pickupRef = useRef();

  const getMarkerWidth = () => {
    if (!deliveryWidth || !pickupWidth) return 0;
    return option === 0 ? deliveryWidth : pickupWidth;
  };

  const getMarkerTransform = (width) => {
    if (!width || !rootWidth) return 0;
    return option === 0 ? 0 : rootWidth - width;
  };

  // click events
  const handleDeliveryClick = () => {
    setOption(0);
  };

  const handlePickupClick = () => {
    setOption(1);
  };

  useEffect(() => {
    const root = rootRef.current;
    const delivery = deliveryRef.current;
    const pickup = pickupRef.current;

    setRootWidth(root.offsetWidth);
    setDeliveryWidth(delivery.offsetWidth);
    setPickupWidth(pickup.offsetWidth);
  }, []);

  const getInfoRender = () => {
    return option === 0 ? (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography className={classes.addressText}>ASAP Delivery</Typography>
        <Typography className={classes.deliveryAddress}>What's Your Address</Typography>
      </Box>
    ) : (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography className={classes.addressText}>ASAP Pickup</Typography>
        <Typography className={classes.pickupAddress}>
          Beverly Hills - 1008 Elden Way
        </Typography>
      </Box>
    );
  };

  const markerWidth = getMarkerWidth();
  const makertTransform = getMarkerTransform(markerWidth);
  const markerStyles = {
    width: markerWidth,
    transform: `translateX(${makertTransform}px)`,
  };

  return (
    <Box display="flex" alignItems="center">
      {getInfoRender()}

      <Button className={classes.button} variant="contained" color="secondary">
        Change
      </Button>

      <Box ref={rootRef} className={classes.root}>
        <Typography
          ref={deliveryRef}
          component="span"
          className={classes.delivery}
          onClick={handleDeliveryClick}
        >
          Delivery
        </Typography>
        <Typography component="span" className={classes.seprator}>
          or
        </Typography>
        <Typography
          ref={pickupRef}
          component="span"
          className={classes.pickup}
          onClick={handlePickupClick}
        >
          Pickup
        </Typography>
        <div style={markerStyles} className={classes.marker}></div>
      </Box>
    </Box>
  );
};

export default ReceiveOption;
