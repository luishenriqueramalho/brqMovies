import React, { useState } from "react";
import { Click, Title } from "./styles";
import { ButtonProps } from "./button-types";
import { ButtonLoader } from "./button-loader";

/**
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
const Button: React.FC<ButtonProps> = ({ onPress, title, disabled }) => {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @returns {Promise<void>}
   */
  const handlePress = async (): Promise<void> => {
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
      <ButtonLoader isLoading={isLoading} />
      {!isLoading && <Title disabled={disabled}>{title}</Title>}
    </Click>
  );
};

export default Button;
