import styled, { css } from 'styled-components';

const Text = styled.p`
    ${({ bold }) => bold && 
      css`
        font-weight: ${props => props.theme.fontWeight.bold};
      `};
`

export default Text;