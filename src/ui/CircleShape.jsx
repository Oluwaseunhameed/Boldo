import styled from "styled-components";

const HalfCircle = styled.div`
  position: absolute;
  top: ${({ top }) => top || 0};
  right: ${({ right }) => right || 0};
  width: ${({ width }) => width || "110rem"};
  height: ${({ height }) => height || "110rem"};
  background-color: ${({ bgColor }) => bgColor || "var(--color-grey-25)"};
  z-index: 1;
  clip-path: ${({ halfCircle }) => halfCircle || "circle(50% at 100% 0)"};
`;

export default HalfCircle;
