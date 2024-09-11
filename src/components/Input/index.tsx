import React, { useState } from "react";
import { Center, Container, ContentInput, Left, Right } from "./styles";
import { EyesHiddenIcon, EyesVisibleIcon } from "@/assets/svgs";
import { Colors } from "@/utils/colors";
import { KeyboardTypeOptions, TouchableOpacity } from "react-native";

interface InputProps {
  placeholder?: string;
  icon?: JSX.Element;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Container>
      <Left>{icon}</Left>
      <Center>
        <ContentInput
          placeholder={placeholder}
          placeholderTextColor={Colors.txtInput}
          onChangeText={onChangeText}
          secureTextEntry={!isPasswordVisible}
          keyboardType={keyboardType}
        />
      </Center>
      <Right>
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? <EyesHiddenIcon /> : <EyesVisibleIcon />}
          </TouchableOpacity>
        )}
      </Right>
    </Container>
  );
};

export default Input;
