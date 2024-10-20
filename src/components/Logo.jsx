import styled from "styled-components";
import logoBlack from "/logo-black.svg"
const StyledLogo = styled.div`
  text-align: ${({ textAlign }) => textAlign || "center"};
  cursor: pointer;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0};
`;

const Img = styled.img`
  height: 3.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logoBlack} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
