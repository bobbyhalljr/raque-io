import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logos/sales-whale-logo.svg";

const Image = styled.img`
  height: 85%;
  width: 186px;
  margin: 0 auto;

  @media(max-width: 420px){
    width: 110px;
    margin: 0;
    padding: 0;
  }
`;

const Brand = () => {
  return (
    <Image src={logo} alt="Sales whale Logo" />
  )
}

export default Brand
