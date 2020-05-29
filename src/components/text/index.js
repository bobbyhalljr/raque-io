import styled, { css } from 'styled-components';
import theme from '../../theme';

const Text = styled.p`
    ${({ bold }) => bold && 
      css`
        font-weight: ${theme.fontWeight.bold};
      `};
`

export default Text;