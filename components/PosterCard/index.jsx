import React, { useContext } from "react";
import { Card } from "./styles";
import { MovieContext } from "@/context/MovieContext";

const PosterCard = () => {
  const { currentMovie } = useContext(MovieContext);
  const { title, image, rt_score, release_date, original_title } = currentMovie;

  return (
    <Card>
      <div className="title">
        <p>{title}</p>
        <span>{original_title}</span>
      </div>

      <img src={image} alt={title} />

      <footer>
        <span>{rt_score / 10}</span>
        <div>{release_date}</div>
      </footer>
    </Card>
  );
};

export default PosterCard;
