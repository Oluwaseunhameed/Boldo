import styled from "styled-components"

const SectionDescription = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: ${(props) => props.fontSize || "4.3rem"};
  font-weight: 400;
  color: ${(props) => props.color || "inherit"};
  width: ${(props) => props.width || "65vw"};
  margin: ${(props) => props.margin || "0 auto"};
  padding: ${(props) => props.padding || "0 0 6rem 0"};
  text-align: ${(props) => props.textAlign || "center"};
`;

export default SectionDescription;