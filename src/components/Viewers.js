import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney" />
        {/* Chrome 66 stops autoplay of all video that don't have the 'muted' property. */}
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt="star wars" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-national.png" alt="national geographic" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: grid;
  grid-gap: 25px; /* space beetween grid items */
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 30px 0 26px;
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: 0 26px 30px -10px rgba(0, 0, 0, 70%),
    0 16px 10px -10px rgba(0, 0, 0, 73%);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: 0;
    object-fit: cover;
    border-radius: 7px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: 0px 40px 58px -16px rgba(0, 0, 0, 80%),
      0 30px 22px -10px rgba(0, 0, 0, 72%);

    video {
      opacity: 1;
    }
  }
`;
