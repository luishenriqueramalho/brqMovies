import { useState } from "react";
import { Animated } from "react-native";

export const usePlaceholderAnimation = (value: string) => {
  const [placeholderPosition] = useState(new Animated.Value(value ? 1 : 0));

  const animatePlaceholder = (toValue: number) => {
    Animated.timing(placeholderPosition, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return { placeholderPosition, animatePlaceholder };
};
