import React, { useEffect, useState } from "react";
import { Container, MovieDetail, MovieGrid, PhotoMovie } from "./styles";
import { Scroll } from "@/utils/global";
import { useStore } from "@/mobx";
import { Observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

const Movies: React.FC = () => {
  const navigation = useNavigation();
  const { moviesStore } = useStore();
  const [isMovies, setIsMovies] = useState([]);
  const [isConnected, setIsConnected] = useState(true);

  const fetchData = async () => {
    try {
      const response = await moviesStore.getMovies();
      setIsMovies(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
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
                  onPress={() =>
                    navigation.navigate("MovieDetail", { ...place })
                  }
                >
                  <PhotoMovie
                    source={{
                      uri: `https://image.tmdb.org/t/p/w185${place.poster_path}`,
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
