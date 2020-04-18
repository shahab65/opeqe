import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

// icons
// import { ReactComponent as TopImg } from "../../assets/images/footer.svg";
import { ReactComponent as AppleIcon } from "../../assets/images/app-store.svg";
import { ReactComponent as GoogleIcon } from "../../assets/images/google-play.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: "#fff",
    width: "100%",
    display: "flex",
    position: "relative",
    zIndex: 1,
    flexDirection: "column",
    paddingTop: 40,
    "& a": {
      color: "#a5a5a5",
      transition: "color .5s",
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.primary.main
      }
    }
  },
  topImage: {
    backgroundColor: "#fff",
    color: "#000",
    marginBottom: 50,
    width: "100%",
    textAlign: "center",
    height: 60,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    "& div": {
      width: "50%",
      position: "absolute",
      top: 25,
      "& svg": {
        width: "100%",
        height: "100%"
      }
    }
  },
  topMenu: {
    borderBottom: "1px solid rgba(255,255,255, .4)",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 150,
    marginRight: 150,
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginLeft: 100,
      marginRight: 100
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 25,
      marginRight: 25
    }
  },
  appIcons: {
    "& > a": {
      display: "inline-block",
      width: 150,
      margin: "0 .25rem",
      [theme.breakpoints.down("sm")]: {
        width: 120
      },
      "& svg": {
        width: "100%",
        height: "100%"
      }
    }
  },
  topMenuList: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    flexWrap: "wrap",
    justifyContent: "center",
    "& a": {
      borderBottom: "2px solid transparent",
      transition: "all .5s",
      padding: "20px 10px",
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  middleMenu: {
    paddingRight: 150,
    paddingLeft: 150,
    [theme.breakpoints.down("md")]: {
      paddingRight: 100,
      paddingLeft: 100
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: 25,
      paddingLeft: 25
    },
    "& > div": {
      textAlign: "left",
      marginBottom: 20,
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        textAlign: "center"
      }
    }
  },
  bottomMenu: {
    marginRight: 150,
    marginLeft: 150,
    borderTop: "1px solid rgba(255,255,255, .4)",
    paddingTop: 40,
    [theme.breakpoints.down("md")]: {
      marginRight: 100,
      marginLeft: 100
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 25,
      marginLeft: 25
    }
  },
  bottomLinks: {
    paddingTop: 40,
    paddingBottom: 40,
    "& span": {
      color: "#a5a5a5",
      marginRight: 10
    },
    "& a": {
      margin: "0 10px"
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container component="footer" className={classes.root}>
      {/* top svg image */}
      {/* <Box className={classes.topImage}>
        <Box>
          <TopImg />
        </Box>
      </Box> */}
      {/* /top svg image */}

      {/* top menu */}
      <Box className={classes.topMenu}>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.appIcons}
        >
          <Link href="##">
            <AppleIcon />
          </Link>
          <Link href="##">
            <GoogleIcon />
          </Link>
        </Box>
        <Box className={classes.topMenuList}>
          <Link href="##">About</Link>
          <Link href="##">Services</Link>
          <Link href="##">Support</Link>
          <Link href="##">Gallery</Link>
          <Link href="##">Terms</Link>
          <Link href="##">Locations</Link>
        </Box>
      </Box>
      {/* /top menu */}

      {/* middle menu */}
      <Grid container className={classes.middleMenu}>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Typography variant="h5" component="span">
            LOGO
          </Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Typography variant="h6">Main Menu</Typography>
          <Link href="##">Pickup</Link>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Typography variant="h6">Orders</Typography>
          <Link href="##">Upcoming Orders</Link>
          <Link href="##">Recent Orders</Link>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Typography variant="h6">Reservation</Typography>
          <Link href="##">Recent Reservation</Link>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Typography variant="h6">Profile</Typography>
          <Link href="##">Promos & Credits</Link>
          <Link href="##">Rewards</Link>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Typography variant="h6">Support</Typography>
          <Link href="##">Contact Us</Link>
          <Link href="##">Live Chat</Link>
        </Grid>
      </Grid>
      {/* /middle menu */}

      {/* bottom menu */}
      <Box className={classes.bottomMenu} display="flex" flexDirection="column">
        <Typography variant="subtitle1" style={{ color: "#d7d7d7" }}>
          Delight customers everywhere with a branded custom-built native iOS,
          native Android and Installable Website Application.
        </Typography>

        <Typography variant="subtitle1" style={{ color: "#a5a5a5" }}>
          Opeqe is reliable, fast and commission free all-in-one ordering
          solutions for multi-location or single location restaurants.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          className={classes.bottomLinks}
        >
          <Box>
            <Typography component="span" variant="subtitle2">
              ©2019 OPEQE INC
            </Typography>
            |<Link href="##">Terms & Conditions</Link>|
            <Link href="##">Privacy Policy</Link>
          </Box>

          {/* social media links */}
          <Box display="flex">
            <Link href="##">
              <InstagramIcon />
            </Link>
            <Link href="##">
              <TwitterIcon />
            </Link>
            <Link href="##">
              <FacebookIcon />
            </Link>
            <Link href="##">
              <YouTubeIcon />
            </Link>
          </Box>
          {/* /social media links */}
        </Box>
      </Box>
      {/* /bottom menu */}
    </Grid>
  );
};

export default Footer;
