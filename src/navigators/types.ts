import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  HomeScreen: undefined;
  MovieDetail: { movieId: number };
  NotInternet: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
