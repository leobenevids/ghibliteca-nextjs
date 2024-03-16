"use client";
import React, { useContext } from "react";
import { Parallax } from "react-parallax";
import { Content, Container, Wrapper } from "./styles";
import Select from "../Select";
import Count from "../Count";
import PosterCard from "../PosterCard";
import { MovieContext } from "@/context/MovieContext";
import SynopsisCard from "../SynopsisCard";

const MainScreen = () => {
  const { currentMovie } = useContext(MovieContext);
  return (
    <Parallax bgImage={currentMovie.movie_banner} blur={10} strength={100}>
      <Wrapper>
        <Select />
        <Container>
          <Content>
            <PosterCard />
            <SynopsisCard />
          </Content>
        </Container>
        <Count />
      </Wrapper>
    </Parallax>
  );
};

export default MainScreen;
