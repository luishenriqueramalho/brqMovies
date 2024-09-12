import { Colors } from "@/utils/colors";
import React from "react";
import { Animated, TextStyle } from "react-native";

interface PlaceholderTextProps {
  placeholder: string;
  placeholderPosition: Animated.Value;
}

const PlaceholderText: React.FC<PlaceholderTextProps> = ({
  placeholder,
  placeholderPosition,
}) => {
  const topInterpolation = placeholderPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [5, -10],
  }) as Animated.AnimatedInterpolation<number>;

  const fontSizeInterpolation =
    (placeholderPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }) as Animated.AnimatedInterpolation<number>) && undefined;

  const placeholderTextStyle: TextStyle = {
    position: "absolute",
    left: 10,
    top: topInterpolation,
    fontSize: fontSizeInterpolation,
    color: Colors.white,
  };

  return (
    <Animated.Text style={placeholderTextStyle}>{placeholder}</Animated.Text>
  );
};

export default PlaceholderText;
