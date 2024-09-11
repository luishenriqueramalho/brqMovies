import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-top: ${scale(10)}px;
`;

export const Left = styled.View`
  width: 90%;
  padding-vertical: ${scale(18)}px;
  padding-left: ${scale(16)}px;
`;

export const Right = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 10%;
  justify-content: center;
  padding-right: ${scale(16)}px;
`;

export const NameBRQ = styled.Text`
  font-size: ${scale(22)}px;
  font-weight: 400;
  line-height: ${scale(28)}px;
  color: ${Colors.white};
`;

export const MenuContainer = styled.View`
  position: absolute;
  right: ${scale(16)}px;
  top: ${scale(70)}px;
  background-color: ${Colors.backgroundInput};
  border-radius: ${scale(8)}px;
  padding-vertical: ${scale(10)}px;
  padding-horizontal: ${scale(24)}px;
  margin-top: ${scale(40)}px;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${scale(10)}px 0;
  align-items: center;
`;

export const ModalMenu = styled.Modal.attrs({
  animationType: "fade",
  transparent: true,
})`
  margin-top: ${scale(20)}px;
`;

export const TitleMenu = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: 400;
  line-height: ${scale(24)}px;
  margin-left: ${scale(8)}px;
  color: ${Colors.white};
`;
