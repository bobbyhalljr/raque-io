import styled, { css } from 'styled-components';
import theme from '../../theme';

const HeaderText = styled.h1`
    text-align: center;
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.h1};
    margin-top: 6rem;

    ${({ white }) => white && 
      css`
        color: ${theme.color.white};
      `};

    @media(max-width: 786px){
        font-size: ${theme.fontSize.h3};
        margin-top: 3rem;
    }

    @media(max-width: 500px){
        font-size: 28px;
        text-align: center;
        margin-top: 3rem;
    }
`

export default HeaderText;
