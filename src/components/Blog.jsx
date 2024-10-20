import styled from "styled-components";

import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import Button from "../ui/Button";

import { AuthorContainer, AuthorInfo, AuthorName, Avatar } from "../ui/Author";

import {
  CardGrid,
  Card,
  CardImage,
  CardContent,
  Category,
  DateText,
  CardDescription,
} from "../ui/Card";
import { blogsData } from "../data";

// Styled components
const Section = styled.section`
  width: 100vw;
  padding: 5rem 8rem;
  background-color: var(--color-grey-0);
`;

const Align = styled.div`
  padding: 2rem 0;
  text-align: center;
`;

const Blog = () => {
  return (
    <Section>
      <SectionTitle color="var(--color-grey-900)">Our Services</SectionTitle>
      <SectionDescription color="var(--color-black-900)">
        Handshake infographic mass market crowdfunding iteration.
      </SectionDescription>
      <CardGrid>
        {blogsData.map(
          ({ imageUrl, description, category, date, avatar, name }, index) => (
            <Card key={index} backgroundColor="var(--color-grey-0)">
              <CardImage>
                <img
                  src={imageUrl}
                  alt={description}
                  style={{ width: "100%", height: "auto" }}
                />
              </CardImage>
              <CardContent>
                <Category>{category}</Category>
                <DateText>{date}</DateText>
              </CardContent>
              <CardDescription descriptionColor="var(--color-black-900)">
                {description}
              </CardDescription>
              <AuthorContainer>
                <Avatar
                  src={avatar}
                  alt={`${name} Avatar`}
                  width="2.5rem"
                  height="2.5rem"
                />
                <AuthorInfo>
                  <AuthorName fontWeight="normal">{name}</AuthorName>
                </AuthorInfo>
              </AuthorContainer>
            </Card>
          )
        )}
      </CardGrid>
      <Align>
        <Button padding="1rem 5rem" color="var(--color-grey-0)">
          Load more
        </Button>
      </Align>
    </Section>
  );
};

export default Blog;
