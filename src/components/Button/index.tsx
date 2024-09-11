import React from "react";
import { Text } from "react-native";
import { Click, Title } from "./styles";

interface ButtonProps {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, disabled }) => {
  return (
    <Click onPress={onPress} disabled={disabled}>
      <Title>{title}</Title>
    </Click>
  );
};

export default Button;
