// theme object with properties that any component can access
export const theme = {
    color: {
        primaryBlue: '#0688FA',
        callToActionBlue: '#329DFA',
        white: '#ffffff',
        black: '#002240',
        duckEggBlue: '#537089',
        timeLineBg: '#EFF8FF', 
        pink: '#FFF5F5',
    },
    fontFamily: ["Source Sans Pro", "Arial", "Helvetica"],
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
        headingDesktop: '107%', 
        headingMobile: '100%', 
        body: '1.5',
        footer: '1.7',
    },
    padding: '1rem 0.5rem',
    boxShadow: {
        cardSmall: '1px 1px 10px rgba(0, 0, 0, 0.2)',
        card: '3px 3px 20px rgba(0, 0, 0, 0.2)',
        cardLarge: '1px 1px 15px rgba(0, 0, 0, 0.2)',
        ctaButton: '0px 5px 15px rgba(0, 0, 0, 0.3)',
    },
    borderRadius: {
        default: '1rem',
        circle: '50%',
    },
}

export default theme;

