import React, { useContext } from "react";
import { Card } from "./styles";
import { MovieContext } from "@/context/MovieContext";

const SynopsisCard = () => {
  const { currentMovie } = useContext(MovieContext);
  const {
    original_title,
    original_title_romanised,
    movie_banner,
    description,
    director,
    producer,
  } = currentMovie;

  return (
    <Card>
      <div className="title">
        <p>{original_title}</p>
        <span>{original_title_romanised}</span>
      </div>

      <div className="content">
        <img src={movie_banner} alt={original_title} />
        <div className="text-container">
          <p>{description}</p>
        </div>
      </div>

      <footer>
        <small>producer: {producer}</small>
        <small>director: {director}</small>
      </footer>
    </Card>
  );
};

export default SynopsisCard;
