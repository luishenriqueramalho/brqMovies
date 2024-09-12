import { Colors } from "@/utils/colors";
import React from "react";
import { ActivityIndicator } from "react-native";

export const ButtonLoader = ({
  isLoading,
}: {
  isLoading: boolean;
}): JSX.Element | null => {
  if (isLoading) {
    return <ActivityIndicator size="small" color={Colors.white} />;
  }
  return null;
};
