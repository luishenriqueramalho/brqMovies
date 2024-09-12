import React from "react";
import { Container, ContentNot, MovieGrid, NotFavorite } from "./styles";
import FavoriteMovieItem from "./favorite.movie-item";
import { FavoriteResponse } from "@/types/FavoriteResponse";

/**
 *
 * @param {FavoriteResponse[]}
 * @returns {JSX.Element}
 */
const FavoriteMovies: React.FC<{ favorites: FavoriteResponse[] }> = ({
  favorites,
}) => {
  return (
    <Container>
      <MovieGrid>
        {favorites.length > 0 ? (
          favorites.map((movie, index) => (
            <FavoriteMovieItem key={index} movie={movie} />
          ))
        ) : (
          <ContentNot>
            <NotFavorite>Você não tem filmes favoritos ainda.</NotFavorite>
          </ContentNot>
        )}
      </MovieGrid>
    </Container>
  );
};

export default FavoriteMovies;
