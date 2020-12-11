import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import HeaderText from '../components/headerText';
import ButtonLink from '../components/buttonLink';

const CallToAction = () => {
    return (
        <Container>
            <HeaderText white>See the future</HeaderText>
            <ButtonContainer>
                <ButtonLink href='#' center boxShadow>Get a Demo</ButtonLink>
                <ButtonLink href='#' center outlineInverse>Read use cases</ButtonLink>
            </ButtonContainer>
        </Container>
    )
}

export default CallToAction;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${theme.color.primaryBlue};
    padding-bottom: 3rem;
    width: 90%;
    max-width: 1440px;
    margin: 6rem auto;
    @media(max-width: 500px){
        clip-path: polygon(0 2%, 100% 19%, 100% 100%, 0% 100%);
        width: 100%;
        height: 450px;
        margin: 0 auto;
        padding: 0;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    white-space: nowrap;
    margin-top: 2rem;
    @media(max-width: 500px){
        padding: 0;
        margin-right: 2rem;
        width: 80%;
        flex-direction: column;
    }
`