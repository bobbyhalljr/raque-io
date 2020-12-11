import React from 'react';
import styled from 'styled-components';

import heroImage from '../assets/illustrations/hero-illustration.jpg';
import theme from '../theme';

const Vision = () => {
    return (
        <>
        <HeroImgContainer>
            <Image src={heroImage} alt='A graphic of people working'/>
        </HeroImgContainer>
        <Container>
            <HeadLineText>
                A future where Team collaboration is easy and fun!
            </HeadLineText>
            <ParagraphContainer>
                <p>At Raque.io, we believe that the future of work is Collaborative in real time with the best tools.</p>
                <p>World class integrations so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.</p>
                <p>Our mission is to foster team communication in every company that could greatly benefit from it, and we're starting off strong addressing this need in software development teams all across the world.</p>
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
    max-width: 1440px;
    height: 80vh;
    width: 90%;
    box-sizing: border-box;
    margin: 0 auto 3rem auto;
    padding-top: 3rem;
    img {
        max-width: 100%;
        height: auto;
        width: 100%;
        box-shadow: ${theme.boxShadow.cardLarge};
        border-radius: ${theme.borderRadius.default};
        @media(max-width: 786px){
            height: auto;
        }
    }
    @media(max-width: 786px){
        height: auto;
        /* margin: 5rem auto 1rem auto; */
        margin: 0 auto 2rem auto;
        width: 90%;
        padding-top: 4rem;
    }

    @media(max-width: 500px){
        margin: 0 auto 2rem auto;
        /* width: 90%; */
        padding-top: 7rem;
        /* margin: 0 auto 1rem auto; */
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