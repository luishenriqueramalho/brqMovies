import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Container, SplashImg } from "./styles";
import Splash from "@/assets/imgs/splash.png";
import { RootStackParamList } from "@/navigators/types";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <Container>
      <SplashImg source={Splash} />
    </Container>
  );
};

export default SplashScreen;
