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
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigators/types";

const Favorites: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { favoriteStore } = useStore();
  const URL_IMG = process.env.URL_IMG;

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
                      navigation.navigate("MovieDetail", { place })
                    }
                  >
                    <PhotoMovie
                      source={{
                        uri: `${URL_IMG}${place.poster_path}`,
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
