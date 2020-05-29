import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import ButtonLink from '../buttonLink';
import theme from '../../theme';

const CollapseWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f1f1f1;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;

  }
  & a {
    text-align: center;
    font-size: ${theme.fontSize.normal};
    line-height: 2;
    color: ${theme.color.black};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${theme.color.primaryBlue};
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  white-space: nowrap;
`

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        color: 'white',
        margin: '0 auto',
        zIndex: '50',
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <div>
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>Why SalesWhale?</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Products</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Company</a></li>
        </NavLinks>
        </div>
        <ButtonContainer>
            <ButtonLink href='https://app.saleswhale.com/login' outline center>Login</ButtonLink>
            <ButtonLink href='https://www.saleswhale.com/get-a-free-demo?ref=topNav' primary center>Get a Demo</ButtonLink>
          </ButtonContainer>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;