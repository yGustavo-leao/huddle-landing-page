import { Container, Footer, FooterIcon, FooterIconContainer, Header, HeaderLogo, IntroductionText, MainContent, MockupsImg, MockupsImgContainer, RegisterButton, Title } from "./Huddle.styles"

import facebookIcon from '../../assets/img/icons/facebook-icon.svg'
import twitterIcon from '../../assets/img/icons/twitter-icon.svg'
import instagramIcon from '../../assets/img/icons/instagram-icon.svg'
export const Huddle = () => {
    return (
        <Container>
            <Header>
                <HeaderLogo src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Logo" />
            </Header>

            <MainContent>
                <MockupsImgContainer>
                    <MockupsImg src={`${process.env.PUBLIC_URL}/assets/images/illustration-mockups.svg`} />
                </MockupsImgContainer>
                
                <Title>Build The Community Your Fans Will Love</Title>
                <IntroductionText>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</IntroductionText>
                <RegisterButton>Register</RegisterButton>
            </MainContent>

            <Footer>
                <FooterIconContainer>
                    <FooterIcon src={facebookIcon} alt="Facebook icon" />
                </FooterIconContainer>
                <FooterIconContainer>
                    <FooterIcon src={twitterIcon} alt="Twitter icon" />
                </FooterIconContainer>
                <FooterIconContainer>
                    <FooterIcon src={instagramIcon} alt="Instagram icon" />
                </FooterIconContainer>
            </Footer>
        </Container>
    )
}