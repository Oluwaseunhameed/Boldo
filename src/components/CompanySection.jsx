/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

// Styled components
const Section = styled.section`
  width: 100vw;
  padding: 8rem 8rem 1rem 8rem;
  background-color: var(--color-grey-0);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4rem 8rem;
  gap: 5rem;
`;

const MainText = styled.h2`
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.5;
  width: 45%;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 45%;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid var(--color-grey-350);
  padding: 1rem 0;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: var(--color-grey-700);
`;

const ArrowIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-blue-900);
  border-radius: 50%;
  color: var(--color-grey-0);
  font-weight: bold;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

// Accordion Component with default props
const Accordion = ({
  title = "Accordion Title",
  children = "Accordion Content",
  isOpen = false,
  onClick = () => {},
}) => (
  <AccordionItem>
    <AccordionHeader onClick={onClick}>
      <span>{title}</span>
      <ArrowIcon isOpen={isOpen}>
        <img
          src={isOpen ? "/chevron-down.svg" : "/chevron-down.svg"}
          alt={isOpen ? "Up Caret" : "Down Caret"}
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
      </ArrowIcon>
    </AccordionHeader>
    {isOpen && <AccordionContent>{children}</AccordionContent>}
  </AccordionItem>
);

// Main Component
const CompanySection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <Section>
      <ContentWrapper>
        <ImageContainer>
          <img src="/office-scene.svg" alt="Office Scene" />
        </ImageContainer>
        <TextContainer>
          <MainText>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </MainText>
          <AccordionContainer>
            <Accordion
              title="We connect our customers with the best?"
              isOpen={openAccordion === 0}
              onClick={() => toggleAccordion(0)}
            >
              We offer tailored solutions and resources to ensure our customers
              have access to the best industry practices and partnerships,
              allowing them to thrive in a competitive market.
            </Accordion>
            <Accordion
              title="Android research & development rockstar?"
              isOpen={openAccordion === 1}
              onClick={() => toggleAccordion(1)}
            >
              Our team excels in Android R&D, delivering cutting-edge solutions
              and maintaining high standards in mobile development. We
              continually push the boundaries to bring innovative features to
              life.
            </Accordion>
          </AccordionContainer>
        </TextContainer>
      </ContentWrapper>
    </Section>
  );
};

export default CompanySection;
