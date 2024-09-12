export interface ButtonProps {
  /**
   *
   * @returns
   */
  onPress?: () => void;
  /**
   * @default undefined
   */
  title: string;
  /**
   * @default undefined
   */
  disabled?: boolean;
}
