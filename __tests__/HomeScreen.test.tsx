import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "@/screens/HomeScreen";
import Movies from "@/components/Movies";
import Favorites from "@/components/Favorites";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@/components/Movies", () => jest.fn(() => null));
jest.mock("@/components/Favorites", () => jest.fn(() => null));

describe("HomeScreen", () => {
  it("Renderizar 'Todos os filmes' por padrão", () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    expect(getByText("Todos os filmes")).toBeTruthy();

    expect(Movies).toHaveBeenCalled();
  });

  it("Renderizar 'Filmes Favoritos' ao clicar na aba", () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    const favoriteMoviesTab = getByText("Filmes Favoritos");
    fireEvent.press(favoriteMoviesTab);

    expect(getByText("Filmes Favoritos")).toBeTruthy();

    expect(Favorites).toHaveBeenCalled();
  });

  it("Alternar entre 'Todos os filmes' e 'Filmes Favoritos'", () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    const favoriteMoviesTab = getByText("Filmes Favoritos");
    fireEvent.press(favoriteMoviesTab);

    expect(Favorites).toHaveBeenCalled();

    const allMoviesTab = getByText("Todos os filmes");
    fireEvent.press(allMoviesTab);

    expect(Movies).toHaveBeenCalled();
  });
});
