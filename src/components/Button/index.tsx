import React from "react";
import { Click, Title } from "./styles";

interface ButtonProps {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, disabled }) => {
  return (
    <Click
      onPress={onPress}
      disabled={disabled}
      testID="enter-button"
      accessibilityState={{ disabled }}
    >
      <Title>{title}</Title>
    </Click>
  );
};

export default Button;
