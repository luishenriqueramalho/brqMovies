import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Login from "@/screens/Login";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("Login Screen", () => {
  it('deve desabilitar o botão "Entrar" quando os campos estão vazios', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    // Usa o testID para encontrar o botão diretamente
    const enterButton = getByTestId("enter-button");

    // Verifica o estado de acessibilidade "disabled"
    expect(enterButton.props.accessibilityState.disabled).toBe(true);
  });

  it('deve habilitar o botão "Entrar" quando os campos estão preenchidos', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    const userInput = getByPlaceholderText("Usuário");
    const passwordInput = getByPlaceholderText("Senha");
    const enterButton = getByTestId("enter-button");

    fireEvent.changeText(userInput, "user");
    fireEvent.changeText(passwordInput, "123");

    // Verifica o estado de acessibilidade "disabled"
    expect(enterButton.props.accessibilityState.disabled).toBe(false);
  });

  it("deve exibir uma mensagem de erro quando o login falhar", async () => {
    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    const userInput = getByPlaceholderText("Usuário");
    const passwordInput = getByPlaceholderText("Senha");
    const enterButton = getByText("Entrar");

    fireEvent.changeText(userInput, "wronguser");
    fireEvent.changeText(passwordInput, "wrongpassword");

    fireEvent.press(enterButton);

    await waitFor(() => {
      expect(getByText("Usuário ou senha incorretos!")).toBeTruthy();
    });
  });
});
