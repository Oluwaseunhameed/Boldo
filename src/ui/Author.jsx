import styled from "styled-components";

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: ${({ width }) => width || "4rem"};
  height: ${({ height }) => height || "4rem"};
  margin-right: 1rem;
`;

export const AuthorInfo = styled.div`
  font-size: 1.2rem;
`;

export const AuthorName = styled.div`
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  color: var(--color-blue-900);
`;

export const AuthorRole = styled.div`
  color: var(--color-grey-600);
`;
