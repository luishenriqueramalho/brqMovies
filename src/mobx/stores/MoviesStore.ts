import apiCall from "@/config/apiCall";
import { makeObservable, observable, runInAction } from "mobx";
import MoviesResponse from "../types/MoviesTypes";

export class MoviesStore {
  movies: MoviesResponse | undefined = undefined;
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
    });
  }

  /**
   * Método para buscar filmes populares na API.
   * Atualizar o estado do carregamento e tratar o armazenamento da resposta.
   *
   * @returns {Promise<MoviesResponse ? undefined>}
   */

  async getMovies() {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response = await apiCall.getPopularMovies();
      runInAction(() => {
        this.movies = response;
      });

      return this.movies;
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default new MoviesStore();
