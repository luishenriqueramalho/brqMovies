import React, { useState } from "react";
import { Container } from "./styles";
import { NoSignalIcon } from "@/assets/svgs";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

const NotInternet: React.FC = () => {
  const [isChecking, setIsChecking] = useState(false);
  const navigation = useNavigation();

  const checkConnection = async () => {
    setIsChecking(true);
    const state = await NetInfo.fetch();
    setIsChecking(false);

    if (state.isConnected) {
      navigation.navigate("HomeScreen");
    } else {
      alert("Ainda sem conexão. Tente novamente.");
    }
  };

  return (
    <>
      <Container>
        <NoSignalIcon />
      </Container>
      <Button
        title={isChecking ? "Verificando..." : "Tentar novamente"}
        onPress={checkConnection}
        disabled={isChecking}
      />
      <SafeAreaView />
    </>
  );
};

export default NotInternet;
