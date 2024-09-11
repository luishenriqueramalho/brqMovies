import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${scale(56)}px;
  background-color: ${Colors.backgroundInput};
`;

export const Left = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

export const Center = styled.View`
  width: 70%;
  justify-content: center;
`;

export const Right = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${Colors.white};
`;

export const ContentInput = styled.TextInput`
  height: 100%;
  font-size: ${scale(16)}px;
  font-weight: 400;
  color: ${Colors.white};
`;
