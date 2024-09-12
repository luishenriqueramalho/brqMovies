import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import { ModalMenu, MenuContainer, MenuItem, TitleMenu } from "./styles";
import { CloseAppIcon } from "@/assets/svgs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigators/types";

/**
 *
 * @param {boolean}
 * @param {() => void}
 * @returns {JSX.Element}
 */
const Menu: React.FC<{ isVisible: boolean; toggleMenu: () => void }> = ({
  isVisible,
  toggleMenu,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    toggleMenu();
    Alert.alert(
      "Você está prestes a sair",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          onPress: () => toggleMenu(),
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
    <ModalMenu visible={isVisible}>
      <TouchableOpacity style={{ flex: 1 }} onPress={toggleMenu} />
      <MenuContainer>
        <MenuItem onPress={handleLogout}>
          <CloseAppIcon />
          <TitleMenu>Sair</TitleMenu>
        </MenuItem>
      </MenuContainer>
    </ModalMenu>
  );
};

export default Menu;
