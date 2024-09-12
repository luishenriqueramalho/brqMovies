import React from "react";
import { MovieDetail, PhotoMovie } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigators/types";
import { FavoriteResponse } from "@/types/FavoriteResponse";

/**
 *
 * @param {FavoriteResponse}
 * @returns {JSX.Element}
 */
const FavoriteMovieItem: React.FC<{ movie: FavoriteResponse }> = ({
  movie,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const URL_IMG = process.env.URL_IMG;

  return (
    <MovieDetail
      onPress={() => navigation.navigate("MovieDetail", { place: movie })}
    >
      <PhotoMovie
        source={{
          uri: `${URL_IMG}${movie.poster_path}`,
        }}
      />
    </MovieDetail>
  );
};

export default FavoriteMovieItem;
