import React from 'react';
import styled from 'styled-components';
import {FaPiggyBank} from 'react-icons/fa'
import {GiHummingbird, GiWaveSurfer} from 'react-icons/gi'
import {FaCat} from 'react-icons/fa'

import theme from '../theme';
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
                <IconContainer>
                    <GiWaveSurfer className='icon'/>
                    <div>Surfs-Up Capital</div>
                </IconContainer>
            </Card>
            <Card>
                <IconContainer>
                    <FaPiggyBank className='icon'/>
                    <div>PiggyBank Ventures</div>
                </IconContainer>
            </Card>
        </Container>
        <Container>
            <Card>
                <IconContainer>
                    <FaCat className='icon'/>
                    <div>Cat Capital</div>
                </IconContainer>
            </Card>
            <Card>
                <IconContainer>
                    <GiHummingbird className='icon'/>
                    <div>Hummingbird Ventures</div>
                </IconContainer>
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
    overflow-x: hidden;
    .pink-slant {
        position: absolute;
        top: 0;
        width: 100%;
        height: auto;
        overflow: hidden;
        z-index: -1;
        @media(max-width: 786px){
            height: 350px;
        }
    }
    .blue-circle {
        position: absolute;
        width: 556px;
        height: 356px;
        right: 5px;
        left: calc(50% - 356px/2 + 520px);
        top: 55px;
        bottom: 25px;
        clip-path: circle(55% at 70% 0);
        transform: rotate(-45deg);
        @media(max-width: 786px){
            left: 440px;
            transform: rotate(-60deg);
            top: 0;
            clip-path: circle(55% at 80% 0);
        }
        @media(max-width:500px){
            position: absolute;
            width: 151px;
            height: 151px;
            left: calc(50% - 70px/2 + 141px);
            transform: rotate(10deg);
            clip-path: circle(90% at 30% 0);
            top: 40px;
        }
    }
    .yellow-circle {
        position: absolute;
        width: 300px;
        height: 300px;
        left: calc(50% - 300px/2 - 480px);
        top: 135px;
        @media(max-width: 786px){
            top: 185px;
            left: calc(50% - 100px/2 - 380px);
            height: 100px;
            transform: rotate(-10deg);
        }
        @media(max-width: 500px){
            width: 146px;
            height: 146px;
            left: calc(50% - 176px/2 - 130px);
            top: 60px;
            clip-path: circle(59.0% at 36% 60%);
            transform: rotate(350deg);
        }
        @media(max-width: 411px){
            transform: rotate(360deg);
        }
    }
    @media(max-width: 500px){
        .pink-slant {
            top: 0;
            height: auto;
            width: 100%;
            z-index: -1;
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
        margin: 0 auto;
    }
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem auto;
    color: #333;
    .icon {
        font-size: 4rem;
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