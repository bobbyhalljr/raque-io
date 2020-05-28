import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import blueWave from '../assets/graphics/blue-wave.png';

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
            {/* <BlueWaveContainer>
                <img src={blueWave} alt='blue wave' />
            </BlueWaveContainer> */}
        </Container>
    )
}

export default BottomFooter;


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 4rem 4rem;
    background: #F4F4F4;
`

const TextContainer = styled.div`
    max-width: 1440px;
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

const BlueWaveContainer = styled.div`
    max-width: 1440px;
    position: relative;
    img {
        position: absolute;
        bottom: 0;
    }

`