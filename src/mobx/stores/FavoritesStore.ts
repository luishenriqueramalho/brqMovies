import { action, makeObservable, observable } from "mobx";
import FavoriteResponse from "../types/FavoritesTypes";

/**
 * FavoriteManager - Realiza o gerenciamento da lógica de filmes favoritos.
 */

export class FavoriteManager {
  /**
   * Verificar se o filme já está na listagem de favoritos.
   *
   * @param favorites - Lista de filmes favoritos.
   * @param movie - Filmes a ser verificado.
   * @returns {boolean}
   */
  isFavorite(favorites: FavoriteResponse[], movie: FavoriteResponse): boolean {
    return favorites.some((fav) => fav.id === movie.id);
  }

  /**
   * Add um filme aos favoritos se ele não estiver na lista.
   *
   * @param favorites - Lista de filmes favoritos.
   * @param movie - Filme a ser add.
   * @returns {FavoriteResponse[]} - Nova lista.
   */
  addFavorite(
    favorites: FavoriteResponse[],
    movie: FavoriteResponse
  ): FavoriteResponse[] {
    if (!this.isFavorite(favorites, movie)) {
      return [...favorites, movie];
    }
    return favorites;
  }

  /**
   * Remover um filme da lista de favoritos.
   *
   * @param favorites - Lista de filmes favoritos.
   * @param movie - Filme a ser removido.
   * @returns {FavoriteResponse[]}
   */
  removeFavorite(
    favorites: FavoriteResponse[],
    movie: FavoriteResponse
  ): FavoriteResponse[] {
    return favorites.filter((fav) => fav.id !== movie.id);
  }
}

export class FavoriteStore {
  favorites: FavoriteResponse[] = [];
  isLoading = false;
  isError = false;

  private favoriteManager: FavoriteManager;

  constructor(favoriteManager: FavoriteManager) {
    this.favoriteManager = favoriteManager;

    makeObservable(this, {
      favorites: observable,
      isLoading: observable,
      isError: observable,
      addFavorite: action,
      removeFavorite: action,
      isFavorite: action,
    });
  }

  /**
   * Adiciona um filme aos favoritos.
   *
   * @param movie - Filme a ser adicionado.
   */
  addFavorite(movie: FavoriteResponse) {
    this.favorites = this.favoriteManager.addFavorite(this.favorites, movie);
  }

  /**
   * Remove um filme dos favoritos.
   *
   * @param movie - Filme a ser removido.
   */
  removeFavorite(movie: FavoriteResponse) {
    this.favorites = this.favoriteManager.removeFavorite(this.favorites, movie);
  }

  /**
   * Verifica se o filme já está na lista de favoritos.
   *
   * @param movie - Filme a ser verificado.
   * @returns {boolean} - Retorna verdadeiro se o filme já está nos favoritos.
   */
  isFavorite(movie: FavoriteResponse): boolean {
    return this.favoriteManager.isFavorite(this.favorites, movie);
  }
}

// Instanciando e exportando o FavoriteStore
const favoriteManager = new FavoriteManager();
export default new FavoriteStore(favoriteManager);
