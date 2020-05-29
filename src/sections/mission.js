import React from 'react';
import styled from 'styled-components';

import missionImage from '../assets/images/mission-image.jpg';
import Button from '../components/button';
import theme from '../theme';

const Mission = () => {
    return (
        <Container>
            <HeaderText>Our Culture</HeaderText>
            <LightText>At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.</LightText>
            <BoxDiv>
                <Box>
                    <img src={missionImage} alt='Cartoon girl' />
                    <h5>Building for the future</h5>
                    <p>We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users.</p>
                </Box>
                <Box>
                    <img src={missionImage} alt='Cartoon girl' />
                    <h5>Promoting trust & transparency</h5>
                    <p>We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other.</p>
                </Box>
                <Box>
                    <img src={missionImage} alt='Cartoon girl' />
                    <h5>Achieving our very best</h5>
                    <p>We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up</p>
                </Box>
            </BoxDiv>
            <DarkText>If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</DarkText>
            <ButtonContainer>
                <Button primary>Join the team</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Mission;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 6rem auto;
    max-width: 1440px;

    @media(max-width: 786px){
        margin-top: 3rem;
    }

    @media(max-width: 500px){
        padding: 0 1.5rem;
        margin: 0 auto;
        width: 100%;
    }
`

const HeaderText = styled.h1`
    text-align: center;
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.h1};

    @media(max-width: 786px){
        font-size: ${theme.fontSize.h3};
    }

    @media(max-width: 500px){
        font-size: 28px;
        text-align: left;
        margin-top: 2rem;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    margin: 0.5rem auto;
    white-space: nowrap;
    width: 30%;

    @media(max-width: 500px){
        margin: 0 auto;
        width: 100%;
        font-size: 16px;
    }
`

const LightText = styled.h3`
    margin-top: 1rem;
    font-size: ${theme.fontSize.h5};
    color: ${theme.color.duckEggBlue};
    text-align: center;
    line-height: 150%;

    @media(max-width: 786px){
        width: 90%;
        margin: 0 auto 1rem auto;
        font-size: 16px;
    }

    @media(max-width: 500px){
        text-align: left;
        width: 100%;
        margin-top: 1rem;
    }
`

const DarkText = styled(LightText)`
    color: ${theme.color.black};

    @media(max-width: 786px){
        margin-top: 2rem;
    }

    @media(max-width: 500px){
        margin-top: 1rem;
    }
`

const BoxDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin: 2rem;

    @media(max-width: 786px){
        margin: 1rem;
    }

    @media(max-width: 500px){
        flex-direction: column;
        margin: 2rem 0 0 0;
        width: 100%;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 2rem;

    @media(max-width: 786px){
        width: 100%;
        margin: 1rem 1rem 0 1rem;
        height: 300px;
    }

    @media(max-width: 500px){
        width: 100%;
        justify-content: flex-start;
        margin: 1rem 0;
        height: auto;
    }

    img {
        width: 80px;
        margin-bottom: 1rem;
    }
    h5 {
        font-size: ${theme.fontSize.h5};
        font-weight: ${theme.fontWeight.bold};
    }
    p {
        color: ${theme.color.duckEggBlue};
        padding: 1rem 0;
        font-size: 16px;
    }
`