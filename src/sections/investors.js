import React from 'react';
import styled from 'styled-components';

import YClogo from '../assets/logos/yc-logo.svg';
import waveMaker from '../assets/logos/wavemaker.svg';
import strive from '../assets/logos/strive.svg';
import monksHill from '../assets/logos/monks-hill.svg';
import pinkSlant from '../assets/graphics/pink-slant-bg-2.svg';
import HeaderText from '../components/headerText';
import Card from '../components/card';

const Investors = () => {
    return (
        <OuterContainer>
            {/* <img className='pink-slant' src={pinkSlant} alt='pink slant' /> */}
        <HeaderText>Our Investors</HeaderText>
        <Container>
        <img className='pink-slant' src={pinkSlant} alt='pink slant' />
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

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     margin: 3rem auto;
//     padding-bottom: 1rem;
//     max-width: 1440px;
//     @media(max-width: 500px){
//         flex-direction: column;
//         margin: 0 auto 3rem auto;
//     }
// `

const Image = styled.img`
    width: 60%;
    margin: 1rem auto;
    @media(max-width: 786px){
        width: 80%;
    }
`