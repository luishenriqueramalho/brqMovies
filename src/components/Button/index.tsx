import React from "react";
import { Text } from "react-native";
import { Click, Title } from "./styles";

interface ButtonProps {
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <Click onPress={onPress}>
      <Title>Entrar</Title>
    </Click>
  );
};

export default Button;
