import styled, { css } from 'styled-components';
import theme from '../../theme';

const Button = styled.button`
    color: ${theme.color.black};
    background: ${theme.color.white};
    border-radius: ${theme.borderRadius.default};
    font-weight: ${theme.fontWeight.normal};
    font-size: ${theme.fontSize.body};
    width: 100%;
    padding: 0.7rem 2rem;
    margin: 1rem;
    border: none;

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
    
      ${({ outlineInverse }) => outlineInverse && 
      css`
        color: ${theme.color.white};
        background: ${theme.color.primaryBlue};
        border: 1px solid ${theme.color.white};
      `};

      ${({ boxShadow }) => boxShadow && 
      css`
        box-shadow: ${theme.boxShadow.ctaButton};
      `};
`

export default Button;