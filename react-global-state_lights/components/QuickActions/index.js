import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleToggleAllOff,
  handleToggleAllOn,
  countOfTurnedOnLights,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleToggleAllOff}
        disabled={countOfTurnedOnLights === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleToggleAllOn}
        disabled={countOfTurnedOnLights === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
