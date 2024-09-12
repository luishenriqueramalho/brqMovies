import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import Movies from "@/components/Movies";
import { useStore } from "@/mobx";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@/mobx", () => ({
  useStore: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

jest.mock("@react-native-community/netinfo", () => ({
  addEventListener: jest.fn((callback) => {
    callback({ isConnected: true });
    return jest.fn();
  }),
}));

describe("Movies Component", () => {
  const mockMoviesStore = {
    getMovies: jest.fn().mockResolvedValue({
      results: new Array(20).fill({
        id: 1,
        poster_path: "/path.jpg",
        original_title: "Sample Movie",
      }),
    }),
  };

  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue({ moviesStore: mockMoviesStore });
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renderiza a lista de filmes após o carregamento", async () => {
    const { queryByTestId, queryAllByTestId } = render(
      <NavigationContainer>
        <Movies />
      </NavigationContainer>
    );

    // Aguarda até que o loading desapareça
    await waitFor(() => {
      expect(queryByTestId("loading-spinner")).toBeNull();
    });

    // Verifica se 20 filmes foram renderizados
    const movieItems = queryAllByTestId("movie-item");
    expect(movieItems.length).toBe(20);
  });
});
