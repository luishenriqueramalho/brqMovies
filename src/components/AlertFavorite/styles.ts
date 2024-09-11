import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

interface ModalFavoriteProps {
  isRemove?: boolean;
}

export const ModalFavorite = styled.View<ModalFavoriteProps>`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ isRemove }) => (isRemove ? Colors.red : Colors.green)};
  padding-vertical: ${scale(10)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: ${scale(30)}px;
`;

export const TitleAddFavorite = styled.Text`
  font-size: ${scale(18)}px;
  font-weight: 500;
  line-height: ${scale(24)}px;
  color: ${Colors.white};
  margin-left: ${scale(8)}px;
`;
