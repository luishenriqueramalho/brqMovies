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

export const Right = styled.View`
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

export const ContainerBack = styled.View`
  flex-direction: row;
  margin-top: ${scale(10)}px;
  justify-content: space-between;
  margin-horizontal: ${scale(16)}px;
  padding-vertical: ${scale(20)}px;
`;

export const BackButtonClick = styled.TouchableOpacity``;

export const FavoriteButtonClick = styled.TouchableOpacity``;
