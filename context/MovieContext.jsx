"use client";
import { createContext, useEffect, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children, films }) => {
  const [movies, setMovies] = useState(films);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = movies[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [movies.length]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        currentIndex,
        setCurrentIndex,
        currentMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
