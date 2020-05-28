import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import YClogo from '../assets/logos/yc-logo.svg';
import waveMaker from '../assets/logos/wavemaker.svg';
import strive from '../assets/logos/strive.svg';
import monksHill from '../assets/logos/monks-hill.svg';
import pinkSlant from '../assets/graphics/pink-slant-bg-2.svg';
import Card from '../components/card';
import blueCircle from '../assets/graphics/blue-circle.svg';
import yellowCircle from '../assets/graphics/yellow-circle.svg';

const Investors = () => {
    return (
        <OuterContainer>
        <HeaderText>Our Investors</HeaderText>
        <Container>
        <img className='pink-slant' src={pinkSlant} alt='pink slant' />
        <img className='blue-circle' src={blueCircle} alt='blue circle' />
        <img className='yellow-circle' src={yellowCircle} alt='yellow circle' />
            <Card>
                <Image src={YClogo} alt='Ycombinator logo' />
            </Card>
            <Card>
                <Image src={monksHill} alt='wave maker logo' />
            </Card>
        </Container>
        <Container>
            <Card>
                <Image src={strive} alt='Ycombinator logo' />
            </Card>
            <Card>
                <Image src={waveMaker} alt='wave maker logo' />
            </Card>
        </Container>
        </OuterContainer>
    )
}

export default Investors;

const OuterContainer = styled.div`
    position: relative;
    margin-top: 0;
    padding-top: 0;
    .pink-slant {
        position: absolute;
        top: 0;
        width: 100%;
        height: auto;
        overflow: hidden;
        /* z-index: 1; */
    }
    .blue-circle {
        position: absolute;
        width: 556px;
        height: 356px;
        right: 5px;
        /* left: calc(50% - 356px/2 + 499px); */
        top: 50px;
        clip-path: circle(55% at 70% 0);
        transform: rotate(-70deg);
        overflow: hidden;
        /* z-index: 1; */
    }
    .yellow-circle {
        position: absolute;
        width: 300px;
        height: 300px;
        left: 270px;
        /* left: calc(50% - 300px/2 - 480px); */
        top: 135px;
        /* z-index: 1; */
    }
    @media(max-width: 500px){
        .pink-slant {
            top: 0;
            height: auto;
            width: 100%;
        }
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto 3rem auto;
    padding-bottom: 1rem;
    max-width: 1440px;

    @media(max-width: 500px){
        flex-direction: column;
        margin: 0 auto 3rem auto;
    }
`

const HeaderText = styled.h1`
    text-align: center;
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.h1};
    margin-top: 0;
    padding-top: 6rem;

    @media(max-width: 786px){
        font-size: ${theme.fontSize.h3};
        margin-top: 0;
        padding-top: 6rem;
    }

    @media(max-width: 500px){
        font-size: 28px;
        text-align: center;
        margin-top: 0;
        padding-top: 0;
    }
`

const Image = styled.img`
    width: 60%;
    margin: 1rem auto;
    @media(max-width: 786px){
        width: 80%;
    }
`