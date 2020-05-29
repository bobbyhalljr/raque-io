import styled, { css } from 'styled-components';
import theme from '../../theme';

const ButtonLink = styled.a`
    color: ${theme.color.black };
    background: ${theme.color.white};
    border-radius: ${theme.borderRadius.default};
    font-weight: ${theme.fontWeight.normal};
    font-size: ${theme.fontSize.body};
    width: 100%;
    padding: 0.5rem 2rem;
    margin: 1rem;
    border: none;
    text-decoration: none;

    ${({ primary }) => primary &&
      css`
        background: ${theme.color.primaryBlue};
        color: ${theme.color.white};
      `};

    ${({ outline }) => outline && 
      css`
        color: ${theme.color.primaryBlue};
        background: ${theme.color.white};
        border: 1px solid ${theme.color.primaryBlue};
      `};

      ${({ center }) => center && 
      css`
        text-align: center;
      `};
`

export default ButtonLink

