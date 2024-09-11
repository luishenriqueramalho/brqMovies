export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  HomeScreen: undefined;
  MovieDetail: { movieId: number };
  NotInternet: undefined;
};

declare global {
  export type RootParamList = RootStackParamList;
}
