import React from "react";
import { Scroll } from "@/utils/global";
import { useStore } from "@/mobx";
import { Observer } from "mobx-react-lite";
import FavoriteMovies from "./favorite-movies";

/**
 *
 * @returns {JSX.Element}
 */
const Favorites: React.FC = () => {
  const { favoriteStore } = useStore();

  return (
    <Observer>
      {() => (
        <Scroll>
          <FavoriteMovies favorites={favoriteStore.favorites} />
        </Scroll>
      )}
    </Observer>
  );
};

export default Favorites;
