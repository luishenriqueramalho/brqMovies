import React, { useState } from "react";
import { Center, Container, ContentInput, Left, Right } from "./styles";
import { EyesHiddenIcon, EyesVisibleIcon } from "@/assets/svgs";
import { Colors } from "@/utils/colors";
import {
  Animated,
  KeyboardTypeOptions,
  Text,
  TouchableOpacity,
} from "react-native";

interface InputProps {
  placeholder?: string;
  icon?: JSX.Element;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  testID?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  testID,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const placeholderPosition = useState(new Animated.Value(value ? 1 : 0))[0];

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(placeholderPosition, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleChangeText = (text: string) => {
    setValue(text);
    onChangeText?.(text);
  };

  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false);
      Animated.timing(placeholderPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const placeholderTextStyle = {
    position: "absolute" as "absolute",
    left: 10,
    top: placeholderPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [5, -10],
    }),
    fontSize: placeholderPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: Colors.txtInput,
  };

  return (
    <Container>
      <Left>{icon}</Left>
      <Center>
        <Animated.Text style={placeholderTextStyle}>
          {placeholder}
        </Animated.Text>
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
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? <EyesHiddenIcon /> : <EyesVisibleIcon />}
          </TouchableOpacity>
        )}
      </Right>
    </Container>
  );
};

export default Input;
