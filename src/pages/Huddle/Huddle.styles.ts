import styled from "styled-components";

export const Container = styled.main`
    padding: 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    background-image: url(${process.env.PUBLIC_URL}/assets/images/bg-mobile.svg);
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: start;
    background-color: #674baf;

    @media (min-width: 1000px) {
        height: 100vh;
        background-image: url(${process.env.PUBLIC_URL}/assets/images/bg-desktop.svg);
        background-size: cover;
        background-position: center;
        padding: 4rem;
    }

    @media (min-width: 1400px) {
        padding: 4rem 8rem;
    }
`

export const Header = styled.header`
`

export const HeaderLogo = styled.img`
    width: 150px;
`

export const MainContent = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    @media (min-width: 1000px) {
        display: grid;
        grid-template-areas:
        "img title"
        "img content"
        "img button"
        ;

        height: 100%;
        grid-template-columns: 65% 35%;
    }

    @media (min-width: 1400px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: max-content 100px auto;
    }
`

export const MockupsImgContainer = styled.div`
    max-width: 500px;
    align-self: center;

    @media (min-width: 1000px) {
        max-width: 800px;
        grid-area: img;
    }
`

export const MockupsImg = styled.img`
    width: 100%;
`

export const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    color: white;
    text-align: center;

    @media (min-width: 1000px) {
        grid-area: title;
        justify-self: start;
        align-self: end;
        text-align: start;
        margin-left: 1rem;
    }

    @media (min-width: 1400px) {
        font-size: 2rem;
        max-width: 400px;
        margin-left: 10rem;
    }
`

export const IntroductionText = styled.p`
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings:
        "wdth" 100;
    
    color: white;
    text-align: center;
    letter-spacing: 1px;

    @media (min-width: 1000px) {
        grid-area: content;
        max-width: 500px;
        text-align: start;
        align-self: start;
        margin-left: 1rem;
    }

    @media (min-width: 1400px) {
        margin-left: 10rem;
    }
`

export const RegisterButton = styled.button`
    width: max-content;
    margin-bottom: 2rem;
    padding: 1rem 5rem;
    align-self: center;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    color: #674baf;
    background: white;

    &:hover {
        background: #e882e8;
    }

    @media (min-width: 1000px) {
        grid-area: button;
        align-self: start;
        margin-left: 1rem;
    }

    @media (min-width: 1400px) {
        margin-left: 10rem;
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    margin: auto;
    margin-bottom: 0;

    @media (min-width: 1000px) {
        width: 100%;
        justify-content: end;
    }
`

export const FooterIconContainer = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    padding: .5rem;
    border-radius: 50%;
    border: 2px solid white;
`

export const FooterIcon = styled.img`
    width: 30px;
    height: 30px;
`