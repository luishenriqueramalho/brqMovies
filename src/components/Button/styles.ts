import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Click = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  padding-vertical: ${scale(10)}px;
  background-color: ${Colors.buttonDisabled};
  border-radius: ${scale(100)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 500;
  line-height: ${scale(20)}px;
  color: ${Colors.backgroundInput};
`;
