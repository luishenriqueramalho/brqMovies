import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import MovieDetail from "@/screens/MovieDetail";
import { useStore } from "@/mobx";
import { useNavigation, useRoute } from "@react-navigation/native";

jest.mock("@/mobx", () => ({
  useStore: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe("MovieDetail Component", () => {
  const mockNavigation = {
    goBack: jest.fn(),
    navigate: jest.fn(),
  };

  const mockRoute = {
    params: {
      place: {
        poster_path: "/path1.jpg",
        original_title: "Sample Movie",
        overview: "This is a movie overview",
        popularity: 100,
        vote_average: 8.5,
        release_date: "2022-01-01",
        vote_count: 1500,
      },
    },
  };

  const mockFavoriteStore = {
    isFavorite: jest.fn().mockReturnValue(false),
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
  };

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useRoute as jest.Mock).mockReturnValue(mockRoute);
    (useStore as jest.Mock).mockReturnValue({
      favoriteStore: mockFavoriteStore,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve renderizar os detalhes do filme corretamente", async () => {
    const { getByText } = render(<MovieDetail />);

    expect(getByText("Sample Movie")).toBeTruthy();
    expect(getByText("SINOPSE")).toBeTruthy();
    expect(getByText("This is a movie overview")).toBeTruthy();
    expect(getByText("Popularidade")).toBeTruthy();
    expect(getByText("100")).toBeTruthy();
    expect(getByText("8.5")).toBeTruthy();
    expect(getByText("1500")).toBeTruthy();
    expect(getByText("12/09/2024")).toBeTruthy();
  });

  it("Deve adicionar o filme aos favoritos ao clicar no botão", async () => {
    const { getByTestId } = render(<MovieDetail />);

    const favoriteButton = getByTestId("favorite-button");
    fireEvent.press(favoriteButton);

    await waitFor(() => {
      expect(mockFavoriteStore.addFavorite).toHaveBeenCalledWith(
        mockRoute.params.place
      );
    });
  });

  it("Deve remover o filme dos favoritos ao clicar no botão se já for favorito", async () => {
    mockFavoriteStore.isFavorite.mockReturnValueOnce(true);

    const { getByTestId } = render(<MovieDetail />);

    const favoriteButton = getByTestId("favorite-button");
    fireEvent.press(favoriteButton);

    await waitFor(() => {
      expect(mockFavoriteStore.removeFavorite).toHaveBeenCalledWith(
        mockRoute.params.place
      );
    });
  });
});
