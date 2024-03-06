import styled from "styled-components";

//commented out for bonux task REFACTORING
/* export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack}></StyledBox>;
} */

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  &.box-with-classname--black {
    background-color: black;
  }
`;

export default StyledBox;
