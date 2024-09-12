import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import Login from "@/screens/Login";
import { NavigationContainer } from "@react-navigation/native";

// Mock do navigation
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("Login Screen", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Deve desabilitar o botão "Entrar" quando os campos estão vazios', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    const enterButton = getByTestId("enter-button");
    expect(enterButton.props.accessibilityState.disabled).toBe(true);
  });

  it('Deve habilitar o botão "Entrar" quando os campos estão preenchidos', async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    const userInput = getByTestId("input-user");
    const passwordInput = getByTestId("input-password");
    const enterButton = getByTestId("enter-button");

    await act(async () => {
      fireEvent.changeText(userInput, "user");
      fireEvent.changeText(passwordInput, "123");
    });

    expect(enterButton.props.accessibilityState.disabled).toBe(false);
  });

  it("Deve exibir uma mensagem de erro quando o login falhar", async () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    const userInput = getByTestId("input-user");
    const passwordInput = getByTestId("input-password");
    const enterButton = getByTestId("enter-button");

    await act(async () => {
      fireEvent.changeText(userInput, "wronguser");
      fireEvent.changeText(passwordInput, "wrongpassword");
    });

    await act(async () => {
      fireEvent.press(enterButton);
    });

    jest.runAllTimers();

    await waitFor(() => {
      expect(getByText("Usuário ou senha incorretos!")).toBeTruthy();
    });
  });

  it('Deve exibir "Entrando..." no botão enquanto o login está sendo processado', async () => {
    const { getByTestId, queryByText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    const userInput = getByTestId("input-user");
    const passwordInput = getByTestId("input-password");
    const enterButton = getByTestId("enter-button");

    await act(async () => {
      fireEvent.changeText(userInput, "user");
      fireEvent.changeText(passwordInput, "123");
    });

    await act(async () => {
      fireEvent.press(enterButton);
    });

    await waitFor(() => {
      expect(queryByText("Entrando...")).toBeTruthy();
    });

    jest.runAllTimers();

    await waitFor(() => {
      expect(queryByText("Entrar")).toBeTruthy();
    });
  });
});
