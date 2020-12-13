import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import theme from '../theme';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth > 500);

    // updates logo image when screen size is greater than 500px
    const updateLogo = () => {
        setIsMobile(window.innerWidth > 500);
    }
    
    // listen from screen size changes
    useCallback(() => {
        window.addEventListener("resize", updateLogo);
        return () => window.removeEventListener("resize", updateLogo);
    }, [updateLogo])

    return (
        <>
        {/* hidden on desktop / visible on mobile */}
        <ImageContainer2>
            {/* <img src={salesWhaleLogo} alt='saleswhale logo' /> */}

        </ImageContainer2>
        <Container>
            {/* render this logo only on desktop */}
            {isMobile ? (
                <ImageContainer1>
                {/* <img src={salesWhaleLogo} alt='saleswhale logo' /> */}
                    <Logo>Raque</Logo>
                </ImageContainer1>
            ) : <div></div>}

            <ResponsiveContainer>
                <LinksContainer>
                    <SubHeading>Why Raque</SubHeading>
                    <a href='#'>Collaborative Teamwork</a>
                    <a href='#'>Track Daily Stand-ups</a>
                    <a href='#'>Real-time Chat</a>
                </LinksContainer>
                <LinksContainer>
                    <SubHeading>Product</SubHeading>
                    <a href='#'>Real-time Collaboration</a>
                    <a href='#'>Customizable channels</a>
                    <a href='#'>Daily Stand-ups</a>
                    <a href='#'>Github Integration</a>
                </LinksContainer>
            </ResponsiveContainer>

            <ResponsiveContainer>
                <LinksContainer>
                    <SubHeading>Company</SubHeading>
                    <a href='#'>About us</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Resources</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Help Center</a>
                </LinksContainer>
                <LinksContainer>
                    <SubHeading>Contact</SubHeading>
                    <a href='#'>hello@raque.com</a>
                    <OfficeContainer>
                        <SubHeading>DC Office</SubHeading>
                        <p>1234 Washington Street, DC 123456</p>
                    </OfficeContainer>
                    <OfficeContainer>
                        <SubHeading>NY Office</SubHeading>
                        <p>123 I love NY Street, NY 123456</p>
                    </OfficeContainer>
                </LinksContainer>
            </ResponsiveContainer>
        </Container>
        </>
    )
}

export default Footer;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: ${theme.color.primaryBlue};
`

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    width: 100%;
    margin: 1rem auto 3rem auto;
    overflow-x: hidden;
    max-width: 1440px;
    @media(max-width: 786px){
        
    }
    @media(max-width: 500px){
        padding: 0;
        margin: 1rem 0;
        justify-content: center;
        font-size: 13px;
    }
`

const ImageContainer1 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 300px;
    margin: 0 10rem 0 2rem;
    visibility: visible;
    @media(max-width: 786px){
        width: 225px;
        margin-right: 2rem;
    }
    @media(max-width: 500px){
        
    }
    img {
        width:100%;
    }
`

const ImageContainer2 = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 2rem 0 0 2rem;
    width: 13%;
    visibility: hidden;
    @media(max-width: 786px){
        width: 35%;
        margin-right: 2rem;
    }
    @media(max-width: 500px){
        visibility: visible;
        margin-right: 0;
        padding: 2rem 0 1rem 1rem;
    }
    img {
        width:100%;
    }
`

const ResponsiveContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0 1rem;
    @media(max-width: 786px){
        display: flex;
        flex-direction: column;
    }
    @media(max-width: 500px){
        padding: 0 3rem;
        margin: 0 auto;
    }
    @media(max-width: 320px){
        padding: 0 2rem;
    }
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 3rem;
    font-size: 1rem;
    @media(max-width: 786px){
        margin-bottom: 3rem;
        display: flex;
        flex-direction: column;
    }
    @media(max-width: 500px){
         margin: 1rem 0; 
        padding: 0;
        justify-content: flex-start;
    }
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
    @media(max-width: 786px){
        margin-top: 1rem;
    }
    @media(max-width: 500px){
        width: 100%;
    }
`

const SubHeading = styled.p`
    font-size: ${theme.fontSize.h5};
    font-weight: ${theme.fontWeight.bold};
`