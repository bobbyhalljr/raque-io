import React from 'react';
import styled from 'styled-components';

import salesWhaleLogo from '../assets/logos/sales-whale-logo.svg';
import theme from '../theme';

const Footer = () => {
    return (
        <Container>
            <ImageContainer>
                <img src={salesWhaleLogo} alt='saleswhale logo' />
            </ImageContainer>
            <LinksContainer>
                <SubHeading>Why saleswhale</SubHeading>
                <a href='https://www.saleswhale.com/platform'>Collaborative Intelligence</a>
                <a href='https://www.saleswhale.com/marketing'>AI Assistant Capabilities</a>
                <a href='https://www.saleswhale.com/sales'>Customer Stories</a>
                <a href='https://www.saleswhale.com/technology'>Use Case - Technology</a>
                <a href='https://www.saleswhale.com/education'>Use Case - Education</a>
                <a href='https://www.saleswhale.com/events'>Use Case - Events</a>
            </LinksContainer>
            <LinksContainer>
                <SubHeading>Product</SubHeading>
                <a href='https://www.saleswhale.com/conversations'>AI Conversations</a>
                <a href='https://www.saleswhale.com/reveal'>Deal Intelligence</a>
                <a href='https://www.saleswhale.com/data-collection'>Lead Enrichment</a>
                <a href='https://www.saleswhale.com/data-collection'>Workflow Integration</a>
            </LinksContainer>
            <LinksContainer>
                <SubHeading>Company</SubHeading>
                <a href='https://www.saleswhale.com/about'>About us</a>
                <a href='https://blog.saleswhale.com/'>Blog</a>
                <a href='https://blog.saleswhale.com/'>Resources</a>
                <a href='https://jobs.lever.co/saleswhale/'>Careers</a>
                <a href='https://blog.saleswhale.com/'>Help Centre</a>
            </LinksContainer>
            <LinksContainer>
                <SubHeading>Contact</SubHeading>
                <a href='mailto:hello@saleswhale.com'>hello@saleswhale.com</a>
                <OfficeContainer>
                    <SubHeading>US Office</SubHeading>
                    <p>1701 Rhode Island Ave NW Washington, DC 20036</p>
                </OfficeContainer>
                <OfficeContainer>
                    <SubHeading>Singapore Office</SubHeading>
                    <p>155B Telok Ayer Street Singapore, 068611</p>
                </OfficeContainer>
            </LinksContainer>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    width: 100%;
    margin: 2rem auto 3rem auto;
    padding: 1rem;
    max-width: 1440px;

    @media(max-width: 500px){
        flex-direction: column;
        margin: 0 auto 3rem auto;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 13%;
    img {
        width:100%;
    }
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    a {
        color: ${theme.color.black};
        text-decoration: none;
        margin-top: 1rem;
        &:hover {
            color: ${theme.color.primaryBlue};
        }
    }
`

const OfficeContainer = styled.div`
    width: 60%;
    margin-top: 1rem;
`

const SubHeading = styled.p`
    font-size: ${theme.fontSize.h5};
    font-weight: ${theme.fontWeight.bold};
`