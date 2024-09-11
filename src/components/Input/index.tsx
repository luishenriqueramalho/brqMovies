import React from "react";
import { Center, Container, ContentInput, Left, Right } from "./styles";
import { ErrorIcon } from "@/assets/svgs";
import { Colors } from "@/utils/colors";

interface InputProps {
  placeholder?: string;
  icon?: string;
  onChangeText?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  return (
    <Container>
      <Left>{icon}</Left>
      <Center>
        <ContentInput
          placeholder={placeholder}
          placeholderTextColor={Colors.txtInput}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </Center>
      <Right>
        <ErrorIcon />
      </Right>
    </Container>
  );
};

export default Input;
