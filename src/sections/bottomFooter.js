import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import blueWave from '../assets/graphics/blue-wave.svg';
import purpleWave from '../assets/graphics/purple-wave.svg';
import yellowCircle from '../assets/graphics/yellow-circle.svg';

const BottomFooter = () => {
    return (
        <Container>
            <TextContainer>
                <BoldText>Privacy</BoldText>
                <BoldText>Terms</BoldText>
                <Paragraph>© 2020 Saleswhale, Inc. All rights reserved.</Paragraph>
            </TextContainer>
            <SocialLinks>
                <img src={facebook} alt='facebook' />
                <img src={twitter} alt='twitter' />
                <img src={linkedin} alt='linkedin' />
            </SocialLinks>
            <img className='blue-wave' src={blueWave} alt='blue wave' />
            <img className='purple-wave' src={purpleWave} alt='purple wave' />
            <img className='yellow-circle' src={yellowCircle} alt='yellow circle' />
        </Container>
    )
}

export default BottomFooter;


const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 4rem;
    background: #F4F4F4;
    position: relative;
    overflow-x: hidden;
    @media(max-width: 500px){
        padding: 2rem;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        height: auto;
    }

    .blue-wave {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 3;
        @media(max-width: 786px){
            width: 100%;
        }
        @media(max-width: 500px){
            width: 1038px;
            height: 40.98px;
            left: -424px;
            bottom: 0;
        }
    }
    .purple-wave {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        @media(max-width: 786px){
            width: 100%;
            bottom: 0;
        }
        @media(max-width: 500px){
            width: 950px;
            height: 100px;
            left: -400px;
            right: 10px;
            bottom: -10px;
        }
    }
    .yellow-circle {
        position: absolute;
        bottom: 0;
        right: 500px;
        z-index: 1;
        @media(max-width: 786px){
            width: 210px;
            height: 60px;
            right: 230px;
            top: 280px;
            overflow: hidden;
        }
        @media(max-width: 500px){
            right: 60px;
            top: 310px;
        }
    }
`

const TextContainer = styled.div`
    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 1rem;
    }
`

const Paragraph = styled.p`
    margin-top: 2rem;
    @media(max-width: 500px){
        font-size: 15px;
        white-space: nowrap;
        margin-bottom: 6rem;
    }
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 2rem;
    img {
        padding: 0.5rem;
    }
    @media(max-width: 500px){
        padding-top: 0;
    }
`

const BoldText = styled.span`
    font-weight: ${theme.fontWeight.bold};
    padding: 0.5rem;
`
