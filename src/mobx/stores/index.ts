import moviesStore, { MoviesStore } from "./MoviesStore";
import favoriteStore, { FavoriteStore } from "./FavoritesStore";

export type RootStore = {
  moviesStore: MoviesStore;
  favoriteStore: FavoriteStore;
};

const rootStore: RootStore = {
  moviesStore,
  favoriteStore,
};

export default rootStore;
