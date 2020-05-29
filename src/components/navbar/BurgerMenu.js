import React from 'react';
import styled from "styled-components";
import theme from '../../theme';

const Burgermenu = (props) => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={ props.navbarState ? "open" : "" }>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;
  @media(max-width: 789px){
    padding-right: 2rem;
  }
  @media(max-width: 500px){
    padding-right: 1rem;
  }
  & span {
    background: ${theme.color.black};
    display: block;
    position: relative;
    width: 2.5rem;
    height: .3rem;
    margin-bottom: .4rem;
    transition: all ease-in-out 0.2s;
  }
  .open span:nth-child(2) {
      opacity: 0;
    }
  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -12px;
  }
  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 10px;
  }
`;