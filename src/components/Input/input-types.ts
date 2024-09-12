import { KeyboardTypeOptions } from "react-native";

/**
 * Interface para definir as propriedades do componente de entrada de texto.
 */
export interface InputProps {
  /**
   * Texto que será exibido como um rótulo dentro do campo de entrada quando ele está vazio.
   * @default undefined
   */
  placeholder?: string;

  /**
   * Ícone que será exibido dentro do campo de entrada, geralmente para ilustrar a finalidade do campo.
   * @default undefined
   */
  icon?: JSX.Element;

  /**
   * Função de callback chamada quando o texto dentro do campo de entrada muda.
   * Recebe o texto atual como argumento.
   * @default undefined
   */
  onChangeText?: (text: string) => void;

  /**
   * Indica se o texto no campo de entrada deve ser mascarado, útil para senhas.
   * @default false
   */
  secureTextEntry?: boolean;

  /**
   * Tipo de teclado a ser exibido quando o campo de entrada está em foco.
   * Pode ser um dos tipos definidos no `KeyboardTypeOptions` do React Native.
   * @default undefined
   */
  keyboardType?: KeyboardTypeOptions;

  /**
   * Identificador para testes, usado para acessar o componente durante testes automatizados.
   * @default undefined
   */
  testID?: string;
}
