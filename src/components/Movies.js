import React from "react";
import styled from "styled-components";

function Movies(props) {
  return (
    <Container>
      <h4>{props.title}</h4>
      <Content>
        <Wrap>
          <img src={props.imgSrc1} alt={props.imgAlt1} />
        </Wrap>
        <Wrap>
          <img src={props.imgSrc2} alt={props.imgAlt2} />
        </Wrap>
        <Wrap>
          <img src={props.imgSrc3} alt={props.imgAlt3} />
        </Wrap>
        <Wrap>
          <img src={props.imgSrc4} alt={props.imgAlt4} />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  /* add padding-bottom to prevent overflow-y when hover on */
  padding: 0 0 26px;
`;

const Content = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0 26px 30px -10px rgba(0, 0, 0, 70%),
    0 16px 10px -10px rgba(0, 0, 0, 73%);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden; /* show border-radius */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: 0px 40px 58px -16px rgba(0, 0, 0, 80%),
      0 30px 22px -10px rgba(0, 0, 0, 72%);
  }
`;
