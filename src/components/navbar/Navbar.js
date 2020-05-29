import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import ButtonLink from '../buttonLink';
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import Container from '../container';

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <Container>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">Why SalesWhale?</a>
            <a href="/">Product</a>
            <a href="/">Company</a>
          </NavLinks>
          <ButtonContainer>
            <ButtonLink href='https://app.saleswhale.com/login' outline>Login</ButtonLink>
            <ButtonLink href='https://www.saleswhale.com/get-a-free-demo?ref=topNav' primary>Get a Demo</ButtonLink>
          </ButtonContainer>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </Container>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${props => props.theme.color.white};
  z-index: 50;
  font-size: ${props => props.theme.fontSize.normal};
`;

const FlexContainer = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  /* width: 40%; */
  white-space: nowrap;
  padding-right: 3rem;
  @media (max-width: 786px) {
      display: none;
    }
`

const NavLinks = styled(animated.ul)`
  width: 100%;
  white-space: nowrap;
  justify-self: center;
  list-style-type: none;
  margin: 0 auto;
  padding-left: 10rem;
  
   a {
    color: ${props => props.theme.color.black};
    font-weight: ${props => props.theme.fontWeight.bold};
    border-bottom: 1px solid transparent;
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.color.primaryBlue};
    }
    @media (max-width: 786px) {
      display: none;
    }
  }
`;
 
const BurgerWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 786px) {
    display: none;
  }
`