import React, { useState } from "react";
import { Modal, SafeAreaView, Text, TouchableOpacity } from "react-native";
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
import { useNavigation } from "@react-navigation/native";

interface NavigationBarProps {
  isBack?: boolean;
  backgroundColor?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isBack }) => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    setMenuVisible(false);
    navigation.navigate("Login");
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
