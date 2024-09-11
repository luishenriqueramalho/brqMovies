import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const PhotoMovie = styled.Image`
  width: 100%;
  aspect-ratio: 185 / 278;
`;

export const NameMovie = styled.Text`
  font-size: ${scale(28)}px;
  font-weight: 700;
  color: ${Colors.white};
  margin-top: ${scale(32)}px;
  line-height: ${scale(36)}px;
  padding-horizontal: ${scale(16)}px;
`;

export const Sinopse = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 700;
  color: ${Colors.primary};
  margin-top: ${scale(16)}px;
  line-height: ${scale(24)}px;
  padding-horizontal: ${scale(16)}px;
`;

export const Description = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 400;
  color: ${Colors.white};
  line-height: ${scale(24)}px;
  margin-top: ${scale(16)}px;
  padding-horizontal: ${scale(16)}px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${scale(16)}px;
  margin-top: ${scale(32)}px;
`;

export const Card = styled.View`
  width: 47%;
  background-color: ${Colors.backgroundInput};
  padding: ${scale(8)}px;
  border-radius: ${scale(8)}px;
`;

export const RowCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 700;
  line-height: ${scale(24)}px;
  color: ${Colors.primary};
  margin-left: ${scale(8)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: 700;
  line-height: ${scale(36)}px;
  color: ${Colors.white};
  margin-top: ${scale(8)}px;
`;

export const NavBack = styled.View`
  flex-direction: row;
  position: absolute;
  margin-top: 40px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  justify-content: space-between;
  padding-horizontal: ${scale(16)}px;
  padding-vertical: ${scale(20)}px;
  transition: background-color 0.3s ease;
`;

export const BackButtonClick = styled.TouchableOpacity``;

export const FavoriteButtonClick = styled.TouchableOpacity``;
