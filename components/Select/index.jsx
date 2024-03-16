import React, { useContext } from "react";
import { SelectWrapper } from "./styles";
import PageTitle from "../PageTitle";
import { MovieContext } from "@/context/MovieContext";

const Select = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const handleOptionChange = ({ target }) => {
    const filter = target.value;
    let sortedFilms = [...movies];
    if (filter === "release_date") {
      sortedFilms.sort((a, b) => a.release_date.localeCompare(b.release_date));
    }
    if (filter === "title") {
      sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter === "rt_score") {
      sortedFilms.sort((a, b) => a.rt_score - b.rt_score);
    }
    setMovies(sortedFilms);
  };

  return (
    <SelectWrapper>
      <PageTitle />
      <label htmlFor="sortSelect"> sorted by</label>
      <select id="sortSelect" onChange={handleOptionChange}>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
        <option value="rt_score">Rotten Tomatoes Score</option>
      </select>
    </SelectWrapper>
  );
};

export default Select;
