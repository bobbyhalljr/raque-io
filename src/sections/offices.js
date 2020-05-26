import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
// import Container from '../components/container';
import HeadlineText from '../components/headerText';
import Card from '../components/card';
import officeImage from '../assets/images/offices-image.jpg';
import pinkSlant from '../assets/graphics/pink-slant-bg.svg';

const Offices = () => {
    return (
        <>
        <HeadlineText>Our Offices</HeadlineText>
        <Container>
            <Card>
                <Image src={officeImage} alt='cartoon character'/>
                <SubHeading>Singapore</SubHeading>
                <Paragraph>155B Telok Ayer Street <br /> Singapore, 068611</Paragraph>
            </Card>
            <Card>
                <Image src={officeImage} alt='cartoon character'/>
                <SubHeading>Washington DC</SubHeading>
                <Paragraph>1701 Rhode Island Ave NW <br /> Washington, DC 20036</Paragraph>
            </Card>
            <img className='pink-slant' src={pinkSlant} alt='pink slant' />
        </Container>
        </>
    )
}

export default Offices;


const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 3rem auto;
    padding-bottom: 1rem;
    max-width: 1440px;
    position: relative;

    .pink-slant {
        position: absolute;
        bottom: 0;
        width: 100%;
        max-width: 1440px;
        height: 300px;
    }

    @media(max-width: 500px){
        flex-direction: column;
        margin: 0 auto 3rem auto;
        .pink-slant {
            height: 1100px;
        }
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