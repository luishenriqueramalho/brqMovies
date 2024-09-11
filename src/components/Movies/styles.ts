import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-horizontal: ${scale(16)}px;
  margin-top: ${scale(32)}px;
`;

export const MovieGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MovieDetail = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: ${scale(156)}px;
  height: ${scale(228)}px;
  margin-bottom: ${scale(16)}px;
`;

export const PhotoMovie = styled.ImageBackground`
  width: ${scale(156)}px;
  height: ${scale(228)}px;
  border-radius: ${scale(8)}px;
  margin-bottom: ${scale(16)}px;
`;
