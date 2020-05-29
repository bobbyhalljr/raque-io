import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 2rem auto;
    max-width: 1440px;

    @media(max-width: 500px){
        padding: 0 1.5rem;
        margin: 0 auto;
        width: 100%;
    }
`

export default Container;