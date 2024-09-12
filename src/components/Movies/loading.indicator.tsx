import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "@/utils/colors";

/**
 *
 * @returns {JSX.Element}
 */
const LoadingIndicator: React.FC = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <ActivityIndicator
        testID="loading-spinner"
        size="large"
        color={Colors.primary}
      />
    </View>
  );
};

export default LoadingIndicator;
