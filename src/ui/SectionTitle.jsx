import styled from "styled-components";

const SectionTitle = styled.p`
  font-size: ${(props) => props.fontSize || "1.9rem"};
  margin: 1rem 0 3rem;
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "center"};
`;

export default SectionTitle;
