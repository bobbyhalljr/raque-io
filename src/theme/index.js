import { css } from 'styled-components';

// create an object with properties that any component can access
export const theme = {
    colors: {
        primaryBlue: '#0688FA',
        callToActionBlue: '#329DFA',
        white: '#ffffff',
        richBlueBlack: '#002240',
        duckEggBlue: '#537089',
        timeLineBg: '#EFF8FF',        
    },
    fonts: ['Source Sans Pro', "sans-serif", "Roboto"],
    fontSizes: {
        h1: '58px',
        h2: '49px',
        h3: '32px',
        h4: '26px',
        h5: '21px',
        body: '18px',
    },
    fontWeight: {
        normal: '400',
        semiBold: '600',
        bold: '700',

    },
    boxShadow: {
        card: '0px 10px 40px rgba(0, 0, 0, 0.08)',
    },
    borderRadius: {
        default: '5px',
        roundImage: '50%',
    },
    screenSize: {
        mobile: css`
            @media(max-width: 320px){
                width: 90vw;
                display: flex;
                justify-content: center;
            }
        `,
        tablet: css`
            @media(max-width: 768px){
                width: 80vw;
                display: flex;
                justify-content: center;
            }
        `,
        desktop: css`
            @media(max-width: 1440px){
                width: 80vw;
                display: flex;
                justify-content: center;
            }
        `
    }
}