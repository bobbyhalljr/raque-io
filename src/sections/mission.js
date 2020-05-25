import React from 'react';
import styled from 'styled-components';

import missionImage from '../assets/images/mission-image.jpg';
import Button from '../components/button';
import HeaderText from '../components/headerText';

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
    margin: 3rem auto;
    max-width: 1440px;

    @media(max-width: 500px){
        padding: 0 2rem;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    margin: 0.5rem auto;
    width: 20%;
    white-space: nowrap;

    @media(max-width: 500px){
        width: 70%;
        font-size: 16px;
    }
`

const LightText = styled.h3`
    margin-top: 1rem;
    font-size: ${props => props.theme.fontSize.h5};
    color: ${props => props.theme.color.duckEggBlue};
    text-align: center;

    @media(max-width: 786px){
        width: 90%;
        margin: 0 auto;
        font-size: 16px;
    }

    @media(max-width: 500px){
        text-align: left;
        width: 100%;
        margin-top: 1rem;
    }
`

const DarkText = styled(LightText)`
    color: ${props => props.theme.color.black};

    @media(max-width: 786px){
        margin-top: 2rem;
    }

    @media(max-width: 500px){
        margin-top: 0;
    }
`

const BoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 2rem;

    @media(max-width: 786px){
        margin: 1rem;
    }

    @media(max-width: 500px){
        flex-direction: column;
        margin-top: 3rem;
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
        margin: 0 0 1rem 0;
        height: auto;
    }

    img {
        width: 80px;
        margin-bottom: 1rem;
    }
    h5 {
        font-size: ${props => props.theme.fontSize.h5};
        font-weight: ${props => props.theme.fontWeight.bold};
    }
    p {
        color: ${props => props.theme.color.duckEggBlue};
        padding: 1rem 0;
        font-size: 16px;
    }
`