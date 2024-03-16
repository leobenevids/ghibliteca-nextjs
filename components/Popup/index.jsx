import React from "react";
import { Background, Container, Content, Buttons } from "./styles";
import YouTube from "react-youtube";

const Popup = ({ setOpenPopup, netflixId, youtubeId }) => {
  console.log(youtubeId);
  const openLink = () => {
    window.open(
      `https://www.netflix.com/search?q=ghibli&jbv=${netflixId}`,
      "_blank"
    );
    setOpenPopup(false);
  };

  const navigateChildren = () => {
    return (
      <>
        <Content>
          Oh! Do you wanna go to <span>Netflix</span>?
        </Content>
        <Buttons>
          <button onClick={() => setOpenPopup(false)}>Cancel</button>
          <button className="confirmButton" onClick={openLink}>
            Confirm
          </button>
        </Buttons>
      </>
    );
  };

  return (
    <Background>
      <Container>{navigateChildren()}</Container>
      {/* <Container>
        <YouTube
          videoId={youtubeId}
          opts={{
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </Container> */}
    </Background>
  );
};

export default Popup;
