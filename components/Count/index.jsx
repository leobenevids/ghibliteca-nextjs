import React, { useContext } from "react";
import { Circle, Wrapper } from "./styles";
import { MovieContext } from "@/context/MovieContext";

const Count = () => {
  const { movies, currentIndex, setCurrentIndex } = useContext(MovieContext);
  return (
    <Wrapper>
      {Array.from({ length: movies.length }, (_, index) => (
        <Circle
          onClick={() => setCurrentIndex(index)}
          key={index}
          isSelected={index === currentIndex}
        />
      ))}
    </Wrapper>
  );
};

export default Count;
