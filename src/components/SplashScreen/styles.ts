import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #16171b;
`;

export const SplashImg = styled.ImageBackground`
  width: ${scale(224)}px;
  height: ${scale(224)}px;
`;
