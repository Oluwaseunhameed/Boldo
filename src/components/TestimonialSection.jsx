import styled from "styled-components";

import SectionDescription from "../ui/SectionDescription";
import { AuthorContainer, AuthorInfo, AuthorName, AuthorRole, Avatar } from "../ui/Author";
import { testimonials } from "../data";

// Styled Components
const Section = styled.section`
  width: 100vw;
  background-color: var(--color-blue-900);
  padding: 5rem 8rem;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ArrowNav = styled.div`

`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Card = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 30rem;
  box-shadow: var(--shadow-xl);
  text-align: left;
  flex: 1 1 20rem;
`;

const Quote = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const NavButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 1rem;
  box-shadow: var(--shadow-lg);
  padding: .9rem 1rem;

  img {
    width: 80%;
  }
`;

const TestimonialSection = () => {
  return (
    <Section>
      <HeaderBox>
        <SectionDescription
          textAlign="left"
          margin="0"
          color="var(--color-grey-0)"
          fontSize="3.8rem"
          padding="5rem 0 8rem 0"
        >
          An enterprise template to ramp up your company website
        </SectionDescription>
        <ArrowNav>
          <NavButton>
            <img src="/arrow-left.svg" alt="Arrow Left" />
          </NavButton>
          <NavButton>
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </NavButton>
        </ArrowNav>
      </HeaderBox>
      <CardContainer>
        {testimonials.map(({ quote, name, role, avatar }) => (
          <Card key={name}>
            <Quote>{quote}</Quote>
            <AuthorContainer>
              <Avatar src={avatar} alt={`${name} Avatar`} />
              <AuthorInfo>
                <AuthorName>{name}</AuthorName>
                <AuthorRole>{role}</AuthorRole>
              </AuthorInfo>
            </AuthorContainer>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
};

export default TestimonialSection;
