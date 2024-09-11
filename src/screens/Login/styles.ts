import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${scale(48)}px;
`;

export const Logo = styled.ImageBackground`
  width: ${scale(224)}px;
  height: ${scale(224)}px;
`;

export const SepareInput = styled.View`
  margin-top: ${scale(48)}px;
`;

export const SepareButton = styled.View`
  margin-top: ${scale(48)}px;
`;

export const ClickPassword = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const TitlePassword = styled.Text`
  font-size: ${scale(14)}px;
  color: ${Colors.white};
  line-height: ${scale(20)}px;
  margin-top: ${scale(34)}px;
  text-align: center;
`;
