import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logos/sales-whale-logo.svg";

const Image = styled.img`
  height: 85%;
  width: 186px;
  margin: 0 auto;
`;

const Brand = () => {
  return (
    <Image src={logo} alt="Sales whale Logo" />
  )
}

export default Brand
