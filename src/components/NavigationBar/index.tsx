import React, { useState } from "react";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import {
  Container,
  Left,
  MenuContainer,
  MenuItem,
  ModalMenu,
  NameBRQ,
  Right,
  TitleMenu,
} from "./styles";
import { CloseAppIcon, PointMenuIcon } from "@/assets/svgs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigators/types";

interface NavigationBarProps {
  isBack?: boolean;
  backgroundColor?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isBack }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    setMenuVisible(false);
    Alert.alert(
      "Você está preste a sair",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          onPress: () => setMenuVisible(false),
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: () => navigation.navigate("Login"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <SafeAreaView />
      {!isBack && (
        <Container>
          <Left>
            <NameBRQ>BRQ Movies</NameBRQ>
          </Left>
          <Right onPress={toggleMenu}>
            <PointMenuIcon isMenuVisible={isMenuVisible} />
          </Right>
        </Container>
      )}

      {isMenuVisible && (
        <ModalMenu visible={isMenuVisible}>
          <TouchableOpacity style={{ flex: 1 }} onPress={toggleMenu} />
          <MenuContainer>
            <MenuItem onPress={handleLogout}>
              <CloseAppIcon />
              <TitleMenu>Sair</TitleMenu>
            </MenuItem>
          </MenuContainer>
        </ModalMenu>
      )}
    </>
  );
};

export default NavigationBar;
