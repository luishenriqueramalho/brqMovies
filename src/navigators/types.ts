import { Movie } from "@/types/MoviesTypes";

export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  HomeScreen: undefined;
  MovieDetail: { place: Movie };
  NotInternet: undefined;
};

declare global {
  export type RootParamList = RootStackParamList;
}
