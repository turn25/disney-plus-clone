import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="1" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-badag.jpg" alt="2" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-scale.jpg" alt="3" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-scales.jpg" alt="4" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &::before {
      font-size: 10px;
      color: rgba(150, 158, 171);
    }
  }

  /* set color of the current active button */
  li.slick-active button::before {
    color: #fff;
  }

  .slick-list {
    overflow: visible; /* need to set overflow-x: hidden on Home.js and Header.js */
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: 0 26px 30px -10px rgba(0, 0, 0, 70%),
      0 16px 10px -10px rgba(0, 0, 0, 73%);
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
