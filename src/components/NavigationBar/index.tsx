import React from "react";
import { SafeAreaView, Text } from "react-native";
import {
  BackButtonClick,
  Container,
  ContainerBack,
  FavoriteButtonClick,
  Left,
  NameBRQ,
  Right,
} from "./styles";
import {
  BackButtonIcon,
  FavoriteButtonIcon,
  PointMenuIcon,
} from "@/assets/svgs";
import { useNavigation } from "@react-navigation/native";

interface NavigationBarProps {
  isBack?: boolean;
  backgroundColor?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  isBack,
  backgroundColor = "transparent",
}) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView />
      {!isBack && (
        <Container>
          <Left>
            <NameBRQ>BRQ Movies</NameBRQ>
          </Left>
          <Right>
            <PointMenuIcon />
          </Right>
        </Container>
      )}
      {isBack && (
        <ContainerBack style={{ backgroundColor: backgroundColor }}>
          <BackButtonClick onPress={() => navigation.goBack()}>
            <BackButtonIcon />
          </BackButtonClick>
          <FavoriteButtonClick onPress={() => {}}>
            <FavoriteButtonIcon />
          </FavoriteButtonClick>
        </ContainerBack>
      )}
    </>
  );
};

export default NavigationBar;
