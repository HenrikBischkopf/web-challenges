import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";
import StyledBox from "@/components/BoxWithStyledComponents.js";

const StyledDiv = styled.div`
  display: flex;
`;
export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $isBlack></BoxWithStyledComponents>
      <BoxWithStyledComponents></BoxWithStyledComponents>
    </StyledDiv>
  );
}
