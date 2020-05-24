import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import theme from '../../theme';

// destructure theme from props
// const { theme } = props;

const GlobalStyle = createGlobalStyle`
    /* reset the browser default css */
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        color: ${theme.color.black};
        font-family: ${theme.fontFamily[0]};
        font-size: ${theme.fontSize.body};
    }

    body {
        line-height: ${theme.lineHeight.body};
    }
`

export default GlobalStyle;