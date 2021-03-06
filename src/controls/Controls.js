import React from "react";
import styled from "styled-components";
// comps
import SliderControl from "./sliderControl/SliderControl";

const Controls = ({ appData, onUpdate }) => {
  const { settings } = appData;

  const updateSettings = (key, newValue) => {
    const newSetting = { ...settings[key], value: newValue };
    onUpdate({
      ...appData,
      settings: { ...settings, [key]: newSetting }
    });
  };

  return (
    <Container>
      <ControlsUI>
        <SliderControl
          labelStyle={{ minWidth: 150 }}
          label={settings.totalBlocksAlongLongestSide.label}
          displayValue={true}
          min={settings.totalBlocksAlongLongestSide.min}
          max={settings.totalBlocksAlongLongestSide.max}
          value={settings.totalBlocksAlongLongestSide.value}
          onChange={value =>
            updateSettings("totalBlocksAlongLongestSide", value)
          }
        />
        <SliderControl
          labelStyle={{ minWidth: 150 }}
          label={settings.maxBowlerSize.label}
          displayValue={true}
          min={settings.maxBowlerSize.min}
          max={settings.maxBowlerSize.max}
          value={settings.maxBowlerSize.value}
          onChange={value => updateSettings("maxBowlerSize", value)}
        />
      </ControlsUI>
    </Container>
  );
};

export default Controls;

// STYLES
const Container = styled.div`
  padding-top: 5px;
  background: black;
  color: white;
`;

const ControlsUI = styled.div`
  margin: 15px;
`;
