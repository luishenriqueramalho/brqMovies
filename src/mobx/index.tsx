import { useLocalObservable } from "mobx-react-lite";
import React from "react";
import rootStore, { RootStore } from "./stores";

/**
 * storeContext - Cria um contexto React para o mobx.
 * Armazena a instancia do RootStore para ser acessada pelos filhos.
 */
const storeContext = React.createContext<RootStore | null>(null);

/**
 *
 * @param {ReactNode}
 * @returns {JSX.Element}
 */
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable(() => rootStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

/**
 *
 * @returns {RootStore}
 * @throws {Error}
 */
export const useStore = () => {
  const store = React.useContext(storeContext);

  if (!store) {
    throw new Error("useStore must be used within a StoreProvider!");
  }

  return store;
};
