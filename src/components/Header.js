import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </a>

        <a>
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>Search</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
          <span>Watchlist</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" alt="original-icon" />
          <span>Original</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" alt="movie-icon" />
          <span>Movie</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" alt="series-icon" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="https://avatars.githubusercontent.com/u/20740899?s=400&u=8e5b02fc9e5f3788c77430660b54a38180075c78&v=4" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1; /* expand to the rest of the width */
  margin-left: 25px;
  cursor: pointer;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      /* this:after */
      &::after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;

        /* before hover */
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center; /* transform: start from left */

        /* animation, cubic-bezier(x1 ,y1 , x2, y2) curved
        transition-property, transition-duration, transition-timing-function, and transition-delay.
        */
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    /* when hover */
    &:hover {
      span::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
