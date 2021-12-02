import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies
        title="Recommended for You"
        imgSrc1="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BF6E593471D989F6428CEC0D0B3FFA04DDEF5728D4ED0D58FB2F2B9CDDDE3907/scale?width=1200&aspectRatio=1.78&format=jpeg"
        imgAlt1="The Simpsons"
        imgSrc2="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg"
        imgAlt2="Bao"
        imgSrc3="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
        imgAlt3="Soul"
        imgSrc4="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg"
        imgAlt4="Tangled"
      />
      <Movies
        title="Continue Watching"
        imgSrc1="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FC5B33EA62F74CF1BEA10485B2C02B2ABD9ED754114CC4C74F83D875B03A94F8/scale?width=1440&aspectRatio=1.78&format=png"
        imgAlt1="Hawkeye"
        imgSrc2="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7E3C2D090B07B93239F4F66E71E2D9DEBF258E305590BF1ADEBD7488DD00D75E/scale?width=1200&aspectRatio=1.78&format=jpeg"
        imgAlt2="ToyStory3"
        imgSrc3="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
        imgAlt3="TheFalconAndTheWinterSoldier"
        imgSrc4="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg"
        imgAlt4="Incredibles2"
      />
      <Movies
        title="Disney+ Originals"
        imgSrc1="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BB8247C541BAB20F53BEA53A003C64D45617EE614A40D58810711BF5297B22A/scale?width=1200&aspectRatio=1.78&format=jpeg"
        imgAlt1="GraivtyFalls"
        imgSrc2="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A93C35EEF79BD4184B2B945D6F1BD786BB3FEEEC6A2BA6644B13AD768F142F0D/scale?width=1200&aspectRatio=1.78&format=jpeg"
        imgAlt2="PhineasAndFerb"
        imgSrc3="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
        imgAlt3="Burrow"
        imgSrc4="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
        imgAlt4="Soul"
      />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  /* 70px of the Header nav bar */
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    /* image, position / size, repeat, fixed */
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* set position behind content */
    z-index: -1;
  }
`;
