import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => (props.checked ? "#0388ef" : "transparent")};
  border-radius: 3px;
  transition: all 150ms;
  border: ${props => (props.checked ? "0" : "1px solid #cfd2d7")};
`;

export const Text = styled.span`
  margin-left: 20px;
  @media all and (max-width: 800px) {
    font-size: 12px;
    line-height: 12px;
}
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
