import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Container, SplashImg } from "./styles";
import Splash from "@/assets/imgs/splash.png";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

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
