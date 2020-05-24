import { css } from 'styled-components';

// create an object with properties that any component can access
const theme = {
    color: {
        primaryBlue: '#0688FA',
        callToActionBlue: '#329DFA',
        white: '#ffffff',
        richBlueBlack: '#002240',
        duckEggBlue: '#537089',
        timeLineBg: '#EFF8FF',        
    },
    fontFamily: "Source Sans Pro",
    fontSize: {
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
    lineHeight: {
        body: '32px',
        footer: '42px',
    },
    boxShadow: {
        card: '0px 10px 40px rgba(0, 0, 0, 0.08)',
        ctaButton: '0px 5px 15px rgba(0, 0, 0, 0.3)',
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

export default theme;

