import React from "react";
import { Label, HiddenCheckbox, StyledCheckbox, Icon, Text } from "./styled";

const Checkbox = ({ label, className, checked, style, ...props }) => (
  <Label style={style}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    <Text>{label}</Text>
  </Label>
);

export default Checkbox;
