import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import Button from "@/components/Button";
import { NavigationContainer } from "@react-navigation/native";

// Mock do navigation
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("Button Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("Deve renderizar o título correto", () => {
    const { getByText } = render(
      <NavigationContainer>
        <Button title="Submit" onPress={jest.fn()} disabled={false} />
      </NavigationContainer>
    );

    expect(getByText("Submit")).toBeTruthy();
  });

  it("Deve chamar onPress ao clicar", async () => {
    const mockPress = jest.fn().mockResolvedValueOnce(null);
    const { getByTestId } = render(
      <NavigationContainer>
        <Button title="Submit" onPress={mockPress} disabled={false} />
      </NavigationContainer>
    );

    const button = getByTestId("enter-button");

    await act(async () => {
      fireEvent.press(button);
    });

    await waitFor(() => expect(mockPress).toHaveBeenCalledTimes(1));
  });

  it("Deve desativar o botão durante o carregamento e exibir loader", async () => {
    const mockPress = jest
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 1000))
      );

    const { getByTestId, queryByTestId } = render(
      <NavigationContainer>
        <Button title="Submit" onPress={mockPress} disabled={false} />
      </NavigationContainer>
    );

    const button = getByTestId("enter-button");

    // Simular clique no botão
    await act(async () => {
      fireEvent.press(button);
    });

    expect(queryByTestId("enter-button")).toBeTruthy();

    expect(queryByTestId("activity-indicator")).toBeTruthy();

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(queryByTestId("activity-indicator")).toBeNull();
      expect(queryByTestId("enter-button")).toBeTruthy();
    });
  });

  it("Não deve chamar onPress quando desativado", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <NavigationContainer>
        <Button title="Submit" onPress={mockPress} disabled={true} />
      </NavigationContainer>
    );

    const button = getByTestId("enter-button");

    fireEvent.press(button);

    expect(mockPress).not.toHaveBeenCalled();
  });

  it("Deve exibir o ActivityIndicator durante o carregamento", async () => {
    const mockPress = jest
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 1000))
      );

    const { getByTestId, queryByTestId } = render(
      <NavigationContainer>
        <Button title="Entrar" onPress={mockPress} disabled={false} />
      </NavigationContainer>
    );

    const button = getByTestId("enter-button");

    await act(async () => {
      fireEvent.press(button);
    });

    await waitFor(() => {
      expect(queryByTestId("activity-indicator")).toBeTruthy();
    });

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(queryByTestId("activity-indicator")).toBeNull();
      expect(queryByTestId("enter-button")).toBeTruthy();
    });
  });
});
