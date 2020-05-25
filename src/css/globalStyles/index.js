import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

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
        line-height: ${props => props.theme.lineHeight.body};
        color: ${props => props.theme.color.black};
        font-family: ${props => props.theme.fontFamily[0]};
        font-size: ${props => props.theme.fontSize.body};
    }
`

export default GlobalStyle;