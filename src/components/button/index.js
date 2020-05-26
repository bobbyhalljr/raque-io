import styled, { css } from 'styled-components';

const Button = styled.button`
    color: ${ props => props.theme.color.black };
    border-radius: ${props => props.theme.borderRadius.default};
    font-weight: ${props => props.theme.fontWeight.normal};
    font-size: ${props => props.theme.fontSize.body};
    width: 100%;
    padding: 0.7rem 2rem;
    margin: 1rem;
    border: none;

    ${({ primary }) => primary &&
      css`
        background: ${props => props.theme.color.primaryBlue};
        color: ${props => props.theme.color.white};
      `};

    ${({ outline }) => outline && 
      css`
        color: ${props => props.theme.color.primaryBlue};
        background: ${props => props.theme.color.white};
        border: 1px solid ${props => props.theme.color.primaryBlue};
      `};
    
      ${({ outlineInverse }) => outlineInverse && 
      css`
        color: ${props => props.theme.color.white};
        background: ${props => props.theme.color.primaryBlue};
        border: 1px solid ${props => props.theme.color.white};
      `};

      ${({ boxShadow }) => boxShadow && 
      css`
        box-shadow: ${props => props.theme.boxShadow.ctaButton};
      `};
`

export default Button;