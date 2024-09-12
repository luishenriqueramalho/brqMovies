import React, { useEffect, useState } from "react";
import { Container, MovieDetail, MovieGrid, PhotoMovie } from "./styles";
import { Scroll } from "@/utils/global";
import { useStore } from "@/mobx";
import { Observer } from "mobx-react-lite";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import { ActivityIndicator } from "react-native";
import { Colors } from "@/utils/colors";
import { RootStackParamList } from "@/navigators/types";
import { Movie, MoviesResponse } from "@/types/MoviesTypes";

const Movies: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { moviesStore } = useStore();
  const URL_IMG = process.env.URL_IMG;
  const [isMovies, setIsMovies] = useState<Movie[]>([]);
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response: MoviesResponse | undefined =
        await moviesStore.getMovies();
      if (response && response.results) {
        setIsMovies(response?.results);
      } else {
        console.error("Nenhuma resposta válida");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false);
    });

    if (isConnected) {
      fetchData();
    }

    return () => {
      unsubscribe();
    };
  }, [moviesStore, isConnected]);

  if (!isConnected) {
    navigation.navigate("NotInternet");
    return null;
  }

  if (isLoading) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          testID="loading-spinner"
          size="large"
          color={Colors.primary}
        />
      </Container>
    );
  }

  return (
    <Observer>
      {() => (
        <Scroll>
          <Container>
            <MovieGrid>
              {isMovies.map((place, index) => (
                <MovieDetail
                  key={index}
                  testID="movie-item"
                  onPress={() => navigation.navigate("MovieDetail", { place })}
                >
                  <PhotoMovie
                    source={{
                      uri: `${URL_IMG}${place.poster_path}`,
                    }}
                  />
                </MovieDetail>
              ))}
            </MovieGrid>
          </Container>
        </Scroll>
      )}
    </Observer>
  );
};

export default Movies;
