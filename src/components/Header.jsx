import styled from "styled-components";

import Logo from "./Logo"
import Button from "../ui/Button"
import heroGraphics from "/HeroGraphics.svg"
import HalfCircle from "../ui/CircleShape";
import { companyLogos } from "../data";


const Container = styled.header`
  background-color: var(--color-grey-0);
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 8rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-blue-900);
  z-index: 2;
`;

const NavItems = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavLinks = styled.div`
  display: flex;
  font-size: 1.7rem;
  gap: 4rem;

  a {
    color: var(--color-blue-900);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  background-color: transparent;
  color: var(--color-blue-900);
  padding: 1rem 4rem;
  border: 0.2rem solid var(--color-blue-900);
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  color: var(--color-black-900);
  padding: 5rem 0;
  z-index: 2;
  gap: 13rem;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Manrope", sans-serif;
  font-size: 4.8rem;
  line-height: 1.4;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin: 2rem 0;
  color: var(--color-grey-900);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const ImageGroup = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2rem;
  justify-items: center;
  padding-left: 4rem;
`;

const LargeImage = styled.img`
  width: 100%;
`;

const LogoGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 6.5rem;
  margin: 3rem auto;
  max-width: 100%; /* Limit the LogoGroup width to 100% of its parent */
  overflow: hidden;

  img {
    opacity: 0.7;
    max-width: 100%; /* Ensures the image does not exceed the container's width */
    height: auto; /* Maintains aspect ratio */
  }
`;

const Header = () => (
  <Container>
    <HalfCircle />
    <Navbar>
      <Logo />
      <NavItems>
        <NavLinks>
          <a href="#product">Product</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </NavLinks>
        <LoginButton>Log In</LoginButton>
      </NavItems>
    </Navbar>

    <HeaderContent>
      <TextColumn>
        <Title>Save time by building fast with Boldo Template</Title>
        <Subtitle>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </Subtitle>
        <ButtonGroup>
          <Button primary="var(--color-blue-900)">Buy template</Button>
          <Button color="var(--color-grey-0)">Explore</Button>
        </ButtonGroup>
      </TextColumn>
      <ImageGroup>
        <LargeImage src={heroGraphics} alt="Progress Bar" />
      </ImageGroup>
    </HeaderContent>

    <LogoGroup>
      {/* Multiple images are used here because they may contain several company logos or brands. */}
      {companyLogos.map((logo, index) => (
        <img key={index} src={logo.src} alt={logo.alt} />
      ))}
    </LogoGroup>
  </Container>
);

export default Header;
