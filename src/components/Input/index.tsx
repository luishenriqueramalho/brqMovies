import React, { useState } from "react";
import { Center, Container, ContentInput, Left, Right } from "./styles";
import { Colors } from "@/utils/colors";
import { InputProps } from "./input-types";
import { usePlaceholderAnimation } from "./useplaceholder-animation";
import PlaceholderText from "./placeholder-text";
import PasswordVisibilityToggle from "./password-visibility-toggle";

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  testID,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const [value, setValue] = useState("");
  const { placeholderPosition, animatePlaceholder } =
    usePlaceholderAnimation(value);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleFocus = () => {
    animatePlaceholder(1);
  };

  const handleChangeText = (text: string) => {
    setValue(text);
    onChangeText?.(text);
  };

  const handleBlur = () => {
    if (value === "") {
      animatePlaceholder(0);
    }
  };

  return (
    <Container>
      <Left>{icon}</Left>
      <Center>
        <PlaceholderText
          placeholder={placeholder || ""}
          placeholderPosition={placeholderPosition}
        />
        <ContentInput
          testID={testID}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={Colors.txtInput}
          onChangeText={handleChangeText}
          value={value}
          secureTextEntry={!isPasswordVisible}
          keyboardType={keyboardType}
          placeholder=""
        />
      </Center>
      <Right>
        {secureTextEntry && (
          <PasswordVisibilityToggle
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        )}
      </Right>
    </Container>
  );
};

export default Input;
