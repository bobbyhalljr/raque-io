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
    padding: 4rem 4rem;
    background: #F4F4F4;
    position: relative;
    .blue-wave {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 3;
    }
    .purple-wave {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
    }
    .yellow-circle {
        position: absolute;
        bottom: 0;
        right: 500px;
        z-index: 1;
    }
`

const TextContainer = styled.div`
`

const Paragraph = styled.p`
    margin-top: 2rem;
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    img {
        padding: 0.5rem;
    }
`

const BoldText = styled.span`
    font-weight: ${theme.fontWeight.bold};
    padding: 0 1rem 2rem 0;
`
