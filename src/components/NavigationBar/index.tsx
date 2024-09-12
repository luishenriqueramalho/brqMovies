import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Container, Left, NameBRQ, Right } from "./styles";
import { PointMenuIcon } from "@/assets/svgs";
import Menu from "./menu";

/**
 *
 * @returns {JSX.Element}
 */
const NavigationBar: React.FC<{ isBack?: boolean }> = ({ isBack }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
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
        <Menu isVisible={isMenuVisible} toggleMenu={toggleMenu} />
      )}
    </>
  );
};

export default NavigationBar;
