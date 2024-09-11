import { makeObservable, observable } from "mobx";
import FavoriteResponse from "../types/FavoritesTypes";

export class FavoriteStore {
  favorites: FavoriteResponse[] = [];
  isLoading = false;
  isError = false;

  constructor() {
    makeObservable(this, {
      favorites: observable,
      isLoading: observable,
      isError: observable,
    });
  }

  addFavorite(movie: FavoriteResponse) {
    const movieExists = this.favorites.find((fav) => fav.id === movie.id);
    if (!movieExists) {
      this.favorites.push(movie);
    }
  }

  isFavorite(movie: FavoriteResponse) {
    return this.favorites.some((fav) => fav.id === movie.id);
  }
}

export default new FavoriteStore();
