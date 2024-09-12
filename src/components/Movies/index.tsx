import React, { useEffect, useState } from "react";
import { Container, MovieGrid } from "./styles";
import { Scroll } from "@/utils/global";
import { useStore } from "@/mobx";
import { Observer } from "mobx-react-lite";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import { RootStackParamList } from "@/navigators/types";
import { Movie, MoviesResponse } from "@/types/MoviesTypes";
import NoConnectionHandler from "./no-connection-handler";
import LoadingIndicator from "./loading.indicator";
import MovieList from "./movie-list";

/**
 *
 * @returns {JSX.Element | null}
 */
const Movies: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { moviesStore } = useStore();
  const [isMovies, setIsMovies] = useState<Movie[]>([]);
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Função para buscar os dados de filmes.
   */
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

  return (
    <NoConnectionHandler isConnected={isConnected} navigation={navigation}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Observer>
          {() => (
            <Scroll>
              <Container>
                <MovieGrid>
                  <MovieList movies={isMovies} />
                </MovieGrid>
              </Container>
            </Scroll>
          )}
        </Observer>
      )}
    </NoConnectionHandler>
  );
};

export default Movies;
