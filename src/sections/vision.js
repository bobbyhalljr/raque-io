import React from 'react';
import styled from 'styled-components';

import heroImage from '../assets/images/hero-img.png';

const Vision = () => {
    return (
        <>
        <HeroImgContainer>
            <Image src={heroImage} alt='a painting'/>
        </HeroImgContainer>
        <Container>
            <HeadLineText>
                A future where AI and humans work hand in hand
            </HeadLineText>
            <ParagraphContainer>
                <p>At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help humans fulfil their highest potential by automating drudgery and producing for more effective results.</p>
                <p>AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.</p>
                <p>Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need in marketing and sales teams all across the world.</p>
                <p>The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.</p>
            </ParagraphContainer>
        </Container>
        </>
    )
}

export default Vision;

const Container = styled.div`
    display: flex;
    margin: 1rem auto;
    padding: 0 1rem;
    width: 100%;
    max-width: 1440px;

    @media(max-width: 786px){
        width: 95%;
    }

    @media(max-width: 500px){
        flex-direction: column;
        width: 96%;
    }
`

const HeroImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 1440px;
    height: 300px;
    margin: 6.5rem auto 1rem auto;

    @media(max-width: 786px){
        margin: 6.5rem auto 1rem auto;
    }

    @media(max-width: 420px){
        margin: 6.5rem auto 1rem auto;
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.default};
`

const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media(max-width: 500px){
        width: 100%;
        margin: 0;
        padding: 0;
    }
    p {
        margin: 1rem 0;
    }
`

const HeadLineText = styled.h1`
    margin: 1rem;
    font-size: ${props => props.theme.fontSize.h1};
    font-weight: ${props => props.theme.fontWeight.bold};
    line-height: ${props => props.theme.lineHeight.headingDesktop};
    width: 50%;

    @media(max-width: 786px){
        text-align: left;
        font-size: ${props => props.theme.fontSize.h3};
        line-height: ${props => props.theme.lineHeight.headingMobile};
    }

    @media(max-width: 500px){
        margin: 0 0 1rem 0;
        width: 100%;
        padding: 0;
    }
`