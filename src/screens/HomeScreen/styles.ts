import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${scale(18)}px;
`;

export const AllMovies = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  padding-vertical: ${scale(10)}px;
`;

export const FavoriteMovies = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  padding-vertical: ${scale(10)}px;
`;

export const Titles = styled.Text<{ isActive: boolean }>`
  font-size: ${scale(16)}px;
  font-weight: 700;
  color: ${({ isActive }) =>
    isActive ? Colors.primary : Colors.buttonDisabled};
`;

export const Underline = styled.View`
  width: 100%;
  height: ${scale(2)}px;
  background-color: ${Colors.primary};
  margin-top: ${scale(4)}px;
`;
