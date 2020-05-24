import React from 'react';
import Button from '../components/button';
import styled from 'styled-components';

import logo from '../assets/logos/sales-whale-logo.svg';

const NavBarStyles = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    white-space: nowrap;
    margin: 1rem auto;
    max-width: 1440px;

    @media(max-width: 768px){
        max-width: 768px;
    }

    @media(max-width: 730px){
        visibility: hidden;
    }

    @media(max-width: 320px){
        visibility: visible;
    }
`
const LogoContainer = styled.div`
    display: flex;
    margin-top: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-left: 1rem;
    img {
        width: 167px;
    }
    @media(max-width: 786px){
        img {
            width: 120px;
        }
    }
`

const NavbarText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: ${props => props.theme.fontWeight.bold};
    a {
        margin: 0;
        padding: 0 1rem;
        text-decoration: none;
        color: ${props => props.theme.color.black};
    }

    @media(max-width: 786px){
        margin-right: 0;
        a {
            padding: 0 0.5rem;
            font-size: 16px;
        }
    }
`

const NavBarButtonContainer = styled.div`
    display: flex;
    align-items: flex-end;

    @media(max-width: 786px){
        margin: 0 0.5rem;
        Button {
            margin: 1rem 0.5rem;
        }
    }
`

const Navbar = () => {
    return (
        <>
        <NavBarStyles>
            <LogoContainer>
                <a href='#'>
                    <img src={logo} alt="sales whale logo" />
                </a>
            </LogoContainer>
            <NavbarText bold>
                <a href='#'>Why SalesWhale?</a>
                <a href='#'>Products</a>
                <a href='#'>Company</a>
            </NavbarText>
            <NavBarButtonContainer>
            <Button outline>Login</Button>
            <Button primary>Get a Demo</Button>
            </NavBarButtonContainer>
        </NavBarStyles>
        </>
    )
}

export default Navbar;