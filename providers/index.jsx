"use client";

import { MovieProvider } from "@/context/MovieContext";

export const Providers = ({ children, films }) => {
  return (
    <MovieProvider films={films}>
      {children}
    </MovieProvider>
  );
};
