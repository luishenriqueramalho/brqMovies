import React from "react";
import { ModalFavorite, TitleAddFavorite } from "./styles";
import { RemoveIcon, VerifyIcon } from "@/assets/svgs";
import { SafeAreaView } from "react-native";

interface AlertFavoriteProps {
  isRemove?: boolean;
}

const AlertFavorite: React.FC<AlertFavoriteProps> = ({ isRemove }) => {
  return (
    <>
      <ModalFavorite isRemove={isRemove}>
        {!isRemove ? <VerifyIcon /> : <RemoveIcon />}
        {!isRemove ? (
          <TitleAddFavorite>Filme adicionado ao favoritos</TitleAddFavorite>
        ) : (
          <TitleAddFavorite>Filme removido do favorito</TitleAddFavorite>
        )}

        <SafeAreaView />
      </ModalFavorite>
    </>
  );
};

export default AlertFavorite;
