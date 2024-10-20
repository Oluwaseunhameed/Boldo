import styled from "styled-components";

// Reusable Styled Components
export const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Card = styled.div`
  padding: 2rem;
  width: ${({ width }) => width || "41rem"};
  border-radius: 1rem;
  text-align: left;
  box-shadow: ${({ boxShadow }) =>
    boxShadow ||
    "none"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-grey-0)"};
`;

export const CardImage = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ titleColor }) => titleColor || "inherit"};
`;

export const CardDescription = styled.p`
  font-size: 1.6rem;
  color: ${({ descriptionColor }) => descriptionColor || "var(--color-grey-0)"};
  padding: ${({ padding }) => padding || "0 0 0.6rem 0"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
`;

export const CardContent = styled.div`
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const Category = styled.p`
  
  font-weight: bold;
  color: var(--color-blue-900);
  margin-bottom: 0.5rem;
`;

export const DateText = styled.span`
  color: var(--color-grey-900);
`;
