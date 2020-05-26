import React from 'react';
import styled from 'styled-components';

import HeaderText from '../components/headerText';
import envolope from '../assets/icons/envolope.svg';

const TimeLine = () => {
    return (
        <>
        <HeaderText>Our Progress</HeaderText>
        <Container>
            <BlueBgDiv>
                <TimeLineInfoContainer>
                    <TimeLineInfo>
                        <Date>2015</Date>
                        <ImageContainer>
                            <img src={envolope} alt='envolope icons'/>
                        </ImageContainer>
                        <h4 id='timeline-text' >Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong</h4>
                    </TimeLineInfo>

                    <TimeLineInfo>
                        <Date>2016</Date>
                        <ImageContainer>
                            <img src={envolope} alt='envolope icons'/>
                        </ImageContainer>
                        <h4 id='timeline-text' >Accepted into Y Combinator (S16) and moved to San Francisco</h4>
                    </TimeLineInfo>

                    <TimeLineInfo>
                        <Date>2017</Date>
                        <ImageContainer>
                            <img src={envolope} alt='envolope icons'/>
                        </ImageContainer>
                        <h4 id='timeline-text' >Raised US$1.2M in seed funding and hired core engineers</h4>
                    </TimeLineInfo>

                    <TimeLineInfo>
                        <Date>2019</Date>
                        <ImageContainer>
                            <img src={envolope} alt='envolope icons'/>
                        </ImageContainer>
                        <h4 id='timeline-text' >Raised US$5.3M in Series A and expanded team size</h4>
                    </TimeLineInfo>

                    <TimeLineInfo>
                        <Date>2020</Date>
                        <ImageContainer>
                            <img src={envolope} alt='envolope icons'/>
                        </ImageContainer>
                        <h4 id='timeline-text'>Opened US office in Washington, DC and hired US sales team</h4>
                    </TimeLineInfo>

                </TimeLineInfoContainer>
            </BlueBgDiv>
        </Container>
        </>
    )
}

export default TimeLine;

const Container = styled.div`
    max-width: 1440px;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
`

const BlueBgDiv = styled.div`
    width: 100%;
    background: ${props => props.theme.color.timeLineBg};
    padding: 2rem 1rem;
    margin: 1rem;
    border-radius: ${props => props.theme.borderRadius.default};
    position: relative;
    max-width: 1440px;
    @media(max-width: 786px){
        width: 90%;
    }
    @media(max-width: 500px){
        width: 90%;
    }

    &:after {
        content: '';
        position: absolute;
        width: 3px;
        background-color: ${props => props.theme.color.primaryBlue};
        top: 0;
        bottom: 0;
        left: 22%;
        right: 0;
        @media(max-width: 1440px){
            left: 22%;
        }
        @media(max-width: 1330px){
            left: 26%;
        }
        @media(max-width: 1220px){
            left: 28%;
        }
        @media(max-width: 1024px){
            left: 31%;
        }
        @media(max-width: 786px){
            left: 21%;
        }
        @media(max-width: 500px){
            left: 24%;
        }
        @media(max-width: 411px){
            left: 28%;
        }
        @media(max-width: 375px){
            left: 30%;
        }
        @media(max-width: 320px){
            left: 36%
        }
    }
`

const TimeLineInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-left: 10rem;

    @media(max-width: 786px){
        margin-left: 0;
    }
`

const TimeLineInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    @media(max-width: 786px){
        #timeline-text {
            font-size: 16px;
            font-weight: ${props => props.theme.fontWeight.normal};
        }
    }
    @media(max-width: 500px){
        width: 100%;
        margin: 1rem 0;
    }
    h4 {
        font-size: ${props => props.theme.fontSize.h4};
        font-weight: ${props => props.theme.fontWeight.semiBold};
    }
` 

const ImageContainer = styled.div`
    margin: 0 1.5rem;
    background: ${props => props.theme.color.white};
    border-radius: ${props => props.theme.borderRadius.circle};
    padding: 1.3rem;
    z-index: 10;
    @media(max-width: 500px){
        margin: 0 0.5rem;
        padding: 0.5rem;
    }
`

const Date = styled.h4`
    color: ${props => props.theme.color.primaryBlue};
    font-size: ${props => props.theme.fontSize.h4};
    font-weight: ${props => props.theme.fontWeight.bold};

    @media(max-width: 786px){
        font-size: ${props => props.theme.fontSize.normal};
    }
`