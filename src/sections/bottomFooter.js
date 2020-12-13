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
                <Paragraph>© 2020 Bobby Hall Jr <br /> All rights reserved</Paragraph>
                {/* <Paragraph>Raque is not a real company</Paragraph> */}
                <Paragraph>
                    Made with ❤️ and hard work by: <br /> 
                    <Link href='https://bobbybytez.io'>Bobby Hall Jr</Link>
                </Paragraph>
                <Paragraph>
                    Computer vector created by:
                    <Link href="https://www.freepik.com/vectors/computer"> pikisuperstar - www.freepik.com</Link>
                </Paragraph>
            </TextContainer>
            <SocialLinks>
                <img src={facebook} alt='facebook' />
                <img src={twitter} alt='twitter' />
                <img src={linkedin} alt='linkedin' />
            </SocialLinks>
            {/* <div>
                <img className='blue-wave' src={blueWave} alt='blue wave' />
                <img className='purple-wave' src={purpleWave} alt='purple wave' />
                <img className='yellow-circle' src={yellowCircle} alt='yellow circle' />
            </div> */}
        </Container>
    )
}

export default BottomFooter;

const Link = styled.a`
    color: ${theme.color.black};
    text-decoration: none;
    margin-top: 1rem;
    color: ${theme.color.primaryBlue};
    &:hover {
        color: #333;
    }
`


const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3rem;
    background: #F4F4F4;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    @media(max-width: 500px){
        padding: 1rem 2rem;
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
        right: 300px;
        z-index: 1;
        @media(max-width: 786px){
            width: 210px;
            height: 60px;
            right: 100px;
            top: 330px;
            overflow: hidden;
        }
        @media(max-width: 500px){
            right: 50px;
            top: 550px;
        }
    }
`

const TextContainer = styled.div`
@media(max-width: 900px){
    margin-bottom: 10rem;
}
    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 0.5rem;
        margin-bottom: 4rem;
    }
`

const Paragraph = styled.p`
    margin-top: 1rem;
    @media(max-width: 500px){
        font-size: 15px;
        margin-bottom: 1rem;
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
