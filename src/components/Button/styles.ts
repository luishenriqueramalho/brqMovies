import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Click = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{ disabled?: boolean }>`
  width: 100%;
  padding-vertical: ${scale(15)}px;
  background-color: ${({ disabled }) =>
    disabled ? Colors.buttonDisabled : Colors.primary};
  border-radius: ${scale(15)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{ disabled?: boolean }>`
  font-size: ${scale(16)}px;
  font-weight: 500;
  line-height: ${scale(20)}px;
  color: ${({ disabled }) =>
    disabled ? Colors.backgroundInput : Colors.white};
`;
