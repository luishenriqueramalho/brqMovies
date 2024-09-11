import React from "react";
import { Circle, ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export const PointMenuIcon = ({ isMenuVisible }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clip-path="url(#clip0_9_7892)">
      <Circle
        cx="12"
        cy="12"
        r="12"
        fill={isMenuVisible ? "#EC8B00" : "#16171B"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z"
        fill={isMenuVisible ? "#16171B" : "#A9A9A9"}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_9_7892">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
