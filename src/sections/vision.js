import React from 'react';
import styled from 'styled-components';

import heroImage from '../assets/illustrations/hero-illustration.jpg';
import theme from '../theme';

const Vision = () => {
    return (
        <>
        <Container>
            <TextContainer>
                <HeadLineText>
                    A future where Team collaboration is easy and fun!
                </HeadLineText>
                <ParagraphContainer>
                    <p>At Raque, we believe that the future of work is Collaboration in real time with the best tools.</p>
                    <p>Our mission is to foster team communication in every company that could greatly benefit from it, and we're starting off strong addressing this need in software development teams all across the world.</p>
                </ParagraphContainer>
            </TextContainer>
            <HeroImgContainer>
                <Image src={heroImage} alt='A graphic of people working'/>
            </HeroImgContainer>
        </Container>
        </>
    )
}

export default Vision;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

const Container = styled.div`
    display: flex;
    margin: 2rem auto 1rem auto;
    width: 100%;
    max-width: 1024px;
    @media(max-width: 786px){
        flex-direction: column-reverse;
    }

    @media(max-width: 500px){
        width: 100%;
        flex-direction: column-reverse;
        margin: 0 auto;
        padding: 0 1rem;
    }
`

const HeroImgContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 4rem 2rem 0 0;
    padding-top: 3rem;
    img {
        /* max-width: 100%; */
        height: auto;
        width: 100%;
        box-shadow: ${theme.boxShadow.cardLarge};
        border-radius: ${theme.borderRadius.default};
        @media(max-width: 786px){
            /* height: auto; */
        }
    }
    @media(max-width: 786px){
        /* height: auto; */
        /* margin: 5rem auto 1rem auto; */
        margin: 0 auto 2rem auto;
        width: 90%;
        padding-top: 4rem;
    }

    @media(max-width: 500px){
        margin: 0 auto 2rem auto;
        width: 90%;
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
    width: 70%;
    margin: 1rem;
    @media(max-width: 786px){
        width: 90%;
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
    font-size: ${theme.fontSize.h2};
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.headingDesktop};
    width: 70%;

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