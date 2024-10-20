import styled from "styled-components";

import Button from "../ui/Button"
import SectionDescription from "../ui/SectionDescription";
import SectionTitle from "../ui/SectionTitle";
import feather from "/feather.svg"
import sun from "/sun.svg"
import star from "/star.svg"

import { Card, CardImage, CardDescription } from "../ui/Card";

const ServiceSection = styled.section`
  width: 100vw;
  text-align: center;
  padding: 5rem 8rem;
  background-color: var(--color-blue-900);
  color: var(--color-grey-0);
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

// Button
const ExploreButton = styled.a`
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  color: var(--color-grey-0);
  padding-bottom: 0.6rem;
  border-bottom: .1rem solid currentColor;
`;

// Feature Section Styles
const FeatureSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding: 10rem 8rem;
  background-color: var(--color-grey-0);
`;

const FeatureCardWrapper = styled.div`
  position: relative;
`;

const FeatureCard = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => props.left || ''};
  right: ${(props) => props.right || ''};
  background-color: var(--color-grey-0);
  border-radius: 1.5rem;
  width: 25rem;
  box-shadow: var(--shadow-lg);
  padding: 3rem;
`;

const FeatureCardTitle = styled.h5`
  padding: 1.4rem 0 0.9rem 0;
`;

const FeatureCardDescription = styled.p`
  font-size: 1.3rem;
`

const FeatureText = styled.div`
  width: 40%;
`;

const FeatureTitle = styled.h2`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 4rem;
  margin-bottom: 4.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0 0 4rem 0;
`;

const FeatureItem = styled.li`
  font-size: ${(props) => props.fontSize || "1.2rem"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  margin-bottom: ${(props) => props.liMarginBtm || "1rem"};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bkgrdColor || ""};
  padding: ${(props) => props.liPadding || ""};
  color: ${(props) => props.liColor || ""};
  border-radius: ${(props) => props.liBorderRadius || ""};
  box-shadow: ${(props) => props.liShadow || "none"};

  &:before {
    content: "${(props) => props.pseudoContent || ""}";
    margin-right: ${(props) => props.pseudoMarginRight || ""};
    background-color: ${(props) => props.pseudoBgColr || "none"};
    border-radius: 50%;
    padding: ${(props) => props.pseudoPadding || "transparent"};
    color: ${(props) =>
      props.colr ||
      "var(--color-black-900)"}; /* Set a default color if none is provided */
  }

  img {
    margin-right: 1.8rem;
  }
`;

const FeatureImage = styled.img`
  border-radius: 10px;
`;

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <ServiceSection>
        <SectionTitle>Our Services</SectionTitle>
        <SectionDescription>
          Handshake infographic mass market crowdfunding iteration.
        </SectionDescription>
        <CardGrid>
          <Card
            backgroundColor="var(--color-blue-900)"
            boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.1)"
          >
            <CardImage>
              <img src="/card-img1.svg" alt="Card Image 1" />
            </CardImage>
            <CardDescription>Cool feature title</CardDescription>
            <ExploreButton href="#">Explore page →</ExploreButton>
          </Card>
          <Card
            backgroundColor="var(--color-blue-900)"
            boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.1)"
          >
            <CardImage>
              <img src="/card-img2.svg" alt="Card Image 1" />
            </CardImage>
            <CardDescription>Even cooler feature</CardDescription>
            <ExploreButton href="#">Explore page →</ExploreButton>
          </Card>
          <Card
            backgroundColor="var(--color-blue-900)"
            boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.1)"
          >
            <CardImage>
              <img src="/card-img3.svg" alt="Card Image 1" />
            </CardImage>
            <CardDescription>Cool feature title</CardDescription>
            <ExploreButton href="#">Explore page →</ExploreButton>
          </Card>
        </CardGrid>
      </ServiceSection>

      {/* Feature Section */}
      <FeatureSection>
        <FeatureCardWrapper>
          <FeatureImage src="/feature-img1.svg" alt="Feature Image" />
          <FeatureCard left="30%">
            <img src="/bar-chart2.svg" alt="Card Image 1" />
            <FeatureCardTitle>30%</FeatureCardTitle>
            <FeatureCardDescription>More income in June</FeatureCardDescription>
          </FeatureCard>
        </FeatureCardWrapper>
        <FeatureText>
          <FeatureTitle>
            We connect our customers with the best and help them keep up.
          </FeatureTitle>
          <FeatureList>
            <FeatureItem
              pseudoContent="✔"
              pseudoBgColr="var(--color-black-900)"
              colr="var(--color-grey-0)"
              pseudoPadding="0.5rem 1rem"
              fontSize="2rem"
              pseudoMarginRight="2rem"
            >
              We connect our customers with the best.
            </FeatureItem>
            <FeatureItem
              pseudoContent="✔"
              pseudoBgColr="var(--color-black-900)"
              colr="var(--color-grey-0)"
              pseudoPadding="0.5rem 1rem"
              fontSize="2rem"
              pseudoMarginRight="2rem"
            >
              Advisor success customer launch party.
            </FeatureItem>
            <FeatureItem
              pseudoContent="✔"
              pseudoBgColr="var(--color-black-900)"
              colr="var(--color-grey-0)"
              pseudoPadding="0.5rem 1rem"
              fontSize="2rem"
              pseudoMarginRight="2rem"
            >
              Business-to-consumer long tail.
            </FeatureItem>
          </FeatureList>
          <Button primary="var(--color-blue-900)">Start now</Button>
        </FeatureText>
      </FeatureSection>

      <FeatureSection>
        <FeatureText>
          <FeatureTitle>
            We connect our customers with the best and help them keep up.
          </FeatureTitle>
          <FeatureList>
            <FeatureItem
              bkgrdColor="var(--color-blue-900)"
              liPadding="2.2rem"
              liColor="var(--color-grey-0)"
              fontSize="1.8rem"
              liBorderRadius=".7rem"
              liMarginBtm="2.2rem"
              liShadow="var(--shadow-xl)"
            >
              <img src={feather} alt="Feather" />
              We connect our customers with the best.
            </FeatureItem>
            <FeatureItem
              bkgrdColor="var(--color-grey-0)"
              liPadding="2.2rem"
              liColor="var(--color-black-900)"
              fontSize="1.8rem"
              liBorderRadius=".7rem"
              liMarginBtm="2.2rem"
              liShadow="var(--shadow-xl)"
            >
              <img src={star} alt="Star" />
              Advisor success customer launch party.
            </FeatureItem>
            <FeatureItem
              bkgrdColor="var(--color-grey-0)"
              liPadding="2.2rem"
              liColor="var(--color-black-900)"
              fontSize="1.8rem"
              liBorderRadius=".7rem"
              liMarginBtm="2.2rem"
              liShadow="var(--shadow-xl)"
            >
              <img src={sun} alt="Sun" />
              Business-to-consumer long tail.
            </FeatureItem>
          </FeatureList>
        </FeatureText>
        <FeatureCardWrapper>
          <FeatureImage src="/feature-img3.svg" alt="Feature Image" />
          <FeatureCard right="30%">
            <img src="/pie-graph.svg" alt="Card Image 1" />
            <FeatureCardTitle>
              <FeatureItem
                pseudoBgColr="var(--color-blue-400)"
                pseudoPadding="0.4rem"
                pseudoMarginRight="1rem"
              >
                35% - Agile Development
              </FeatureItem>
              <FeatureItem
                pseudoBgColr="var(--color-green-500)"
                pseudoPadding="0.4rem"
                pseudoMarginRight="1rem"
              >
                30% - Investor bandwidth
              </FeatureItem>
              <FeatureItem
                pseudoBgColr="var(--color-grey-350)"
                pseudoPadding="0.4rem"
                pseudoMarginRight="1rem"
              >
                35% - A/B testing
              </FeatureItem>
            </FeatureCardTitle>
          </FeatureCard>
        </FeatureCardWrapper>
      </FeatureSection>
    </>
  );
};

export default Services;
