import apiCall from "@/config/apiCall";
import { makeObservable, observable, runInAction } from "mobx";
import MoviesResponse from "../types/MoviesTypes";

export class MoviesStore {
  movies: MoviesResponse | undefined = undefined;
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      movies: observable,
      isLoading: observable,
    });
  }

  async getMovies() {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response = await apiCall.MoviesRoute.getMovies();
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
