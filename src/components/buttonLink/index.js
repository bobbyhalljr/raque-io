import styled, { css } from 'styled-components';

const ButtonLink = styled.a`
    color: ${ props => props.theme.color.black };
    background: ${props => props.theme.color.white};
    border-radius: ${props => props.theme.borderRadius.default};
    font-weight: ${props => props.theme.fontWeight.normal};
    font-size: ${props => props.theme.fontSize.body};
    width: 100%;
    padding: 0.5rem 2rem;
    margin: 1rem;
    border: none;
    text-decoration: none;

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

      ${({ center }) => center && 
      css`
        text-align: center;
      `};
`

export default ButtonLink

