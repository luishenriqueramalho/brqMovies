import React from "react";
import { Circle, ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export const FavoriteButtonIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clip-path="url(#clip0_1663_5150)">
      <Circle opacity="0.8" cx="12" cy="12" r="12" fill="white" />
      <Path
        d="M6.61725 8.20051C5.23891 9.57885 5.23891 11.8136 6.61725 13.1919L11.9634 18.5381L12.0002 18.5013L12.037 18.5381L17.3831 13.192C18.7615 11.8136 18.7615 9.5789 17.3831 8.20055C16.0048 6.82221 13.77 6.82221 12.3917 8.20055L12.0002 8.59203L11.6087 8.20051C10.2303 6.82216 7.9956 6.82216 6.61725 8.20051Z"
        fill="#16171B"
        stroke="#16171B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1663_5150">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
