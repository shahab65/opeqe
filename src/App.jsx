import React from "react";
import { ThemeProvider, makeStyles } from "@material-ui/styles";

// assets
import SushiImage from "./assets/images/sushi.jpg";

// themes
import defaultTheme from "./themes/default";

// layouts
import BaseLayout from "./layouts/BaseLayout";

// components
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ActionBar from "./components/ActionBar";
import FoodCarousel from "./components/FoodCarousel";
import CrossPlatform from "./components/CrossPlatform";
import Section from "./components/Section";
import ReceiveOption from "./components/ReceiveOption";
import GiftCard from "./components/GiftCard";

// styles
const useStyles = makeStyles(() => ({
  container: {
    padding: "4rem",
  },
}));

const items = [
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
];

const App = () => {
  const classes = useStyles();
  return (
    <Box width="100%" height="100%">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <BaseLayout>
          <ActionBar />
          <Container className={classes.container} maxWidth="xl">
            <FoodCarousel title="Special Offers" items={items} />
            <FoodCarousel title="Salad" items={items} />
            <FoodCarousel title="Appetizer" items={items} />
            <FoodCarousel title="Main Course" items={items} />

            <Section>
              <CrossPlatform />
            </Section>

            <FoodCarousel title="American" items={items} />

            <Section>
              <GiftCard />
            </Section>

            <Section>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4" gutterBottom>
                  Ready to order?
                </Typography>
                <Typography gutterBottom style={{ color: "#a5a5a5" }}>
                  Browse our menu for dine-in, delivery or pickup and catering
                </Typography>
                <ReceiveOption />
              </Box>
            </Section>
          </Container>
        </BaseLayout>
      </ThemeProvider>
    </Box>
  );
};

export default App;
