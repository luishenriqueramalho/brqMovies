import React, { useState } from "react";
import { Click, Title } from "./styles";
import { ActivityIndicator } from "react-native";
import { Colors } from "@/utils/colors";

interface ButtonProps {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, disabled }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    if (onPress) {
      setIsLoading(true);
      await onPress();
      setIsLoading(false);
    }
  };

  return (
    <Click
      onPress={handlePress}
      disabled={disabled || isLoading}
      testID="enter-button"
      accessibilityState={{ disabled: disabled || isLoading }}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Title disabled={disabled}>{title}</Title>
      )}
    </Click>
  );
};

export default Button;
