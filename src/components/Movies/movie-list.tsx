import React from "react";
import { MovieDetail, MovieGrid, PhotoMovie } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Movie } from "@/types/MoviesTypes";
import { RootStackParamList } from "@/navigators/types";

/**
 *
 * @param {Movie[]}
 * @returns {JSX.Element}
 */
const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const URL_IMG = process.env.URL_IMG;

  return (
    <MovieGrid>
      {movies.map((movie, index) => (
        <MovieDetail
          key={index}
          testID="movie-item"
          onPress={() => navigation.navigate("MovieDetail", { place: movie })}
        >
          <PhotoMovie
            source={{
              uri: `${URL_IMG}${movie.poster_path}`,
            }}
          />
        </MovieDetail>
      ))}
    </MovieGrid>
  );
};

export default MovieList;
