import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";


// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Carousel from "../Carousel";
import FoodCard from "../FoodCard";
import CarouselBar from "../CarouselBar";

// styles
const useStyles = makeStyles(() => ({}));

const FoodCarousel = ({ title = "food", items = [] }) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box width="100%" marginBottom="1rem">
        <CarouselBar
          currentPage={page}
          pageCount={Math.floor(items.length / 3)}
        />
      </Box>
      <Carousel
        currentPage={page}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      >
        {items.map((food, index) => (
          <Box padding="0.5rem" key={index}>
            <FoodCard
              image={food.image}
              name={food.name}
              category={food.category}
              time={food.time}
              price={food.price}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FoodCarousel;
