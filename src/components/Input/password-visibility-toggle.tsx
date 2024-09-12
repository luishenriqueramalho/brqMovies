import React from "react";
import { TouchableOpacity } from "react-native";
import { EyesHiddenIcon, EyesVisibleIcon } from "@/assets/svgs";

interface PasswordVisibilityToggleProps {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}

const PasswordVisibilityToggle: React.FC<PasswordVisibilityToggleProps> = ({
  isPasswordVisible,
  togglePasswordVisibility,
}) => (
  <TouchableOpacity onPress={togglePasswordVisibility}>
    {isPasswordVisible ? <EyesHiddenIcon /> : <EyesVisibleIcon />}
  </TouchableOpacity>
);

export default PasswordVisibilityToggle;
