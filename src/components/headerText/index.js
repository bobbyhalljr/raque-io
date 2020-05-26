import styled, { css } from 'styled-components';

const HeaderText = styled.h1`
    text-align: center;
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.h1};
    margin-top: 6rem;

    ${({ white }) => white && 
      css`
        color: ${props => props.theme.color.white};
      `};

    @media(max-width: 786px){
        font-size: ${props => props.theme.fontSize.h3};
        margin-top: 3rem;
    }

    @media(max-width: 500px){
        font-size: 28px;
        text-align: center;
        margin-top: 3rem;
    }
`

export default HeaderText;
