import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.primary || "transparent"};
  color: ${(props) =>
    props.primary ? "var(--color-grey-0)" : "var(--color-blue-900)"};
  padding: ${(props) => props.padding || "1.5rem 5rem"};
  border: 0.2rem solid
    ${(props) => (props.primary ? "transparent" : "var(--color-blue-900)")};
  border-radius: ${(props) => props.borderRadius || "3rem"};
  font-size: ${(props) => props.fontSize || "1.8rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  cursor: pointer;
  transition: background-color 0.3s;
`;

export default Button;
