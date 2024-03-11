import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light, onToggle }) {
  console.log("onToggle function in Light component: ", light.id);
  console.log("one light in Light component: ", light);
  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(light.id);
      }}
      $isOn={light.isOn}
    >
      <Icon $isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
