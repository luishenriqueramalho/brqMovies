import NavigationBar from "@/components/NavigationBar";
import React, { useState } from "react";
import { AllMovies, FavoriteMovies, Header, Titles, Underline } from "./styles";
import Movies from "@/components/Movies";
import Favorites from "@/components/Favorites";

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");

  return (
    <>
      <NavigationBar />
      <Header>
        <AllMovies onPress={() => setActiveTab("all")}>
          <Titles isActive={activeTab === "all"}>Todos os filmes</Titles>
          {activeTab === "all" && <Underline />}
        </AllMovies>
        <FavoriteMovies onPress={() => setActiveTab("favorites")}>
          <Titles isActive={activeTab === "favorites"}>Filmes Favoritos</Titles>
          {activeTab === "favorites" && <Underline />}
        </FavoriteMovies>
      </Header>
      {activeTab === "all" ? <Movies /> : <Favorites />}
    </>
  );
};

export default HomeScreen;
