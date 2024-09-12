import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/navigators/types";

/**
 *
 * @param {boolean}
 * @returns {NavigationProp<RootStackParamList>}
 * @param {React.ReactNode}
 * @returns {JSX.Element | null}
 */
const NoConnectionHandler: React.FC<{
  isConnected: boolean;
  navigation: NavigationProp<RootStackParamList>;
  children: React.ReactNode;
}> = ({ isConnected, navigation, children }) => {
  if (!isConnected) {
    navigation.navigate("NotInternet");
    return null;
  }
  return <>{children}</>;
};

export default NoConnectionHandler;
