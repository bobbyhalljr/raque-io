import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import theme from '../theme';

const GlobalStyle = createGlobalStyle`
    /* import google fonts */
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

    /* reset the browser default css */
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        line-height: ${theme.lineHeight.body};
        color: ${theme.color.black};
        font-family: ${theme.fontFamily[0]};
        font-size: ${theme.fontSize.body};
        overflow-x: hidden;
    }
`

export default GlobalStyle;