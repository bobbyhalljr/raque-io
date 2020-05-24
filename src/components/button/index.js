import styled, { css } from 'styled-components';

export default Button = styled.button`
color: ${ props.theme.color.primaryBlue };
padding: 0.5rem, 1rem;
margin: 1rem;

${props.theme.color.primaryBlue &&
    css`
      background: ${props.theme.color.primaryBlue};
      color: ${props.theme.color.primaryBlue};
    `};
`
// export const ButtonOutline = styled(Button)`
//     border: 1px solid ${ theme.color.primaryBlue };
//     background: ${ theme.color.white };
// `