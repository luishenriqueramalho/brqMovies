import { makeObservable, observable } from "mobx";

export class FavoriteStore {
  favorites: any[] = [];
  isLoading = false;
  isError = false;

  constructor() {
    makeObservable(this, {
      favorites: observable,
      isLoading: observable,
      isError: observable,
    });
  }

  addFavorite(movie: any) {
    const movieExists = this.favorites.find((fav) => fav.id === movie.id);
    if (!movieExists) {
      this.favorites.push(movie);
    }
  }

  isFavorite(movie: any) {
    return this.favorites.some((fav) => fav.id === movie.id);
  }
}

export default new FavoriteStore();
