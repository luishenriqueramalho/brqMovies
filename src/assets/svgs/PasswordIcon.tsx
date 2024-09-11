import React from "react";
import { Path, Rect, Svg } from "react-native-svg";

export const PasswordIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Rect
      x="3"
      y="10"
      width="18"
      height="12"
      rx="2"
      stroke="white"
      stroke-width="2"
    />
    <Path
      d="M7 9.16675V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C13.3261 1 14.5979 1.52678 15.5355 2.46447C16.4732 3.40215 17 4.67392 17 6V9.16675"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
