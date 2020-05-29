import React from 'react';
import styled from 'styled-components';

import heroImage from '../assets/images/hero-img.png';
import theme from '../theme';

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
    padding: 0 3.5rem;
    width: 100%;
    max-width: 1440px;

    @media(max-width: 786px){
        padding: 0 1.5rem;
    }

    @media(max-width: 500px){
        flex-direction: column;
    }
`

const HeroImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 1440px;
    height: 300px;
    margin: 6rem auto 1rem auto;

    @media(max-width: 786px){
        margin: 5rem auto 1rem auto;
    }

    @media(max-width: 500px){
        margin: 7rem auto 1rem auto;
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadius.default};
`

const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    @media(max-width: 786px){
        width: 50%;
    }
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
    font-size: ${theme.fontSize.h1};
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.headingDesktop};
    width: 50%;

    @media(max-width: 786px){
        text-align: left;
        font-size: ${theme.fontSize.h3};
        line-height: ${theme.lineHeight.headingMobile};
    }

    @media(max-width: 500px){
        margin: 0 0 1rem 0;
        width: 100%;
        padding: 0;
    }
`