import React from 'react';
import styled from 'styled-components';
import {IoLocationOutline} from 'react-icons/io5'

import theme from '../theme';
import HeadlineText from '../components/headerText';
import Card from '../components/card';
import officeImage from '../assets/images/offices-image.jpg';
import pinkSlant from '../assets/graphics/pink-slant-bg.svg';

const Offices = () => {
    return (
        <OuterContainer>
        <HeadlineText>Our Offices</HeadlineText>
        <Container>
            <Card>
                <div style={{ width: '25%', margin: '0 auto' }}>
                    <IconContainer>
                        <IoLocationOutline />
                    </IconContainer>
                </div>
                <SubHeading>New York, NY</SubHeading>
                <Paragraph>123 I love NY Street <br /> New York, NY 123456</Paragraph>
            </Card>
            <Card>
                <div style={{ width: '25%', margin: '0 auto' }}>
                    <IconContainer>
                        <IoLocationOutline />
                    </IconContainer>
                </div>
                <SubHeading>Washington DC</SubHeading>
                <Paragraph>1234 Washington Street <br /> Washington, DC 123456</Paragraph>
            </Card>
            <img className='pink-slant' src={pinkSlant} alt='pink slant' />
        </Container>
        </OuterContainer>
    )
}

export default Offices;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-radius: ${theme.borderRadius.circle};
    background: #bae1ff;
    padding: 1.5rem;
    margin-bottom: 1rem;
    color: ${theme.color.primaryBlue};
    box-shadow: ${theme.boxShadow.cardSmall};
`


const OuterContainer = styled.div`
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0;
    .pink-slant {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 350px;
    }
    @media(max-width: 500px){
        .pink-slant {
            height: 1100px;
        }
    }
`


const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 3rem auto 0 auto;
    padding-bottom: 1rem;
    max-width: 1440px;
    @media(max-width: 500px){
        flex-direction: column;
        margin: 0 auto;
        padding-bottom: 6rem;
    }
`

const Image = styled.img`
    width: 80px;
    margin: 1rem auto;
`

const Paragraph = styled.p`
    margin: 0 auto;
    text-align: center;

    @media(max-width: 786px){
        font-size: 16px;
    }
`

const SubHeading = styled.h3`
    font-size: ${theme.fontSize.h3};
    font-weight: ${theme.fontWeight.bold};
    text-align: center;
`