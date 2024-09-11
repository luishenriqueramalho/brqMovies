import React from "react";
import {
  Container,
  ContentNot,
  MovieDetail,
  MovieGrid,
  PhotoMovie,
  NotFavorite,
} from "./styles";
import { Scroll } from "@/utils/global";
import { useStore } from "@/mobx";
import { Observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";

const Favorites: React.FC = () => {
  const navigation = useNavigation();
  const { favoriteStore } = useStore();

  console.tron.log("favoritos:", favoriteStore.favorites);

  return (
    <Observer>
      {() => (
        <Scroll>
          <Container>
            <MovieGrid>
              {favoriteStore.favorites.length > 0 ? (
                favoriteStore.favorites.map((place, index) => (
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
                ))
              ) : (
                <ContentNot>
                  <NotFavorite>
                    Você não tem filmes favoritos ainda.
                  </NotFavorite>
                </ContentNot>
              )}
            </MovieGrid>
          </Container>
        </Scroll>
      )}
    </Observer>
  );
};

export default Favorites;
