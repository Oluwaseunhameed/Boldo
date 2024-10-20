import styled from "styled-components";

import Button from "../ui/Button";
import HalfCircle from "../ui/CircleShape";

// Styled components
const Section = styled.section`
  width: 100vw;
  padding: 5rem 8rem 1rem 8rem;
  background-color: var(--color-grey-0);
`;

const FooterWrapper = styled.div`
  background-color: var(--color-blue-900);
  padding: 4rem 0;
  text-align: center;
  color: var(--color-grey-0);
  border-radius: 1rem;
  position: relative;
  margin-bottom: 8rem;
`;

const MinWidth = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 4rem;
  margin-bottom: 2rem;
  line-height: 5.5rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  padding: 2rem 0;
`;

const Input = styled.input`
  padding: 1rem 0 1rem 2rem;
  border: none;
  border-radius: 3rem;
  font-size: 1.4rem;
  width: 33rem;
  background-color: var(--color-grey-0);
  color: var(--color-black-900);
`;

const FooterSection = styled.footer`
  background-color: var(--color-grey-0);
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5rem;
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const FooterItem = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-900);
  margin: 2.5rem 0;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const FooterNote = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-900);
`;

const FooterLink = styled.a`
  background-color: var(--color-green-500);
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--color-blue-900);
  margin-left: 0.5rem;
`;

const Footer = () => {
  return (
    <Section>
      <FooterWrapper>
        <HalfCircle
          halfCircle="circle(25% at 100% 0)"
          bgColor="var(--color-blue-800)"
          height="40rem"
          width="120rem"
        />
        <MinWidth>
          <Title>An enterprise template to ramp up your company website</Title>
          <Form>
            <Input type="email" placeholder="Your email address" />
            <Button
              primary="var(--color-green-500)"
              style={{ color: "var(--color-blue-900)" }}
            >
              Start now
            </Button>
          </Form>
        </MinWidth>
      </FooterWrapper>

      <FooterSection>
        <FooterColumn>
          <Logo>
            <img src="/logo-black.svg" alt="Company Logo" />
          </Logo>
          <FooterNote>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </FooterNote>
          <FooterItem>All rights reserved.</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Landings</FooterTitle>
          {["Home", "Products", "Services"].map((item) => (
            <FooterItem key={item}>{item}</FooterItem>
          ))}
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Company</FooterTitle>
          <FooterItem>Home</FooterItem>
          <FooterItem>
            Careers <FooterLink href="#">Hiring!</FooterLink>
          </FooterItem>
          <FooterItem>Services</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Resources</FooterTitle>
          {["Blog", "Products", "Services"].map((item) => (
            <FooterItem key={item}>{item}</FooterItem>
          ))}
        </FooterColumn>
      </FooterSection>
    </Section>
  );
};

export default Footer;
