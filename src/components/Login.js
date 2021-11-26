import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get all there</SignUp>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.75;
    z-index: -1; /* set position behind content */
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column; /* top to bottom */
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  padding: 18px 0;
  margin: 10px 0 14px;
  background-color: #0063e5;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  transition: all 250ms;
  letter-spacing: 1.4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin: 5px 0;
`;

const CTALogoTwo = styled.img`
  margin-top: 10px;
  width: 90%;
`;
