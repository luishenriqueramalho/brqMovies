import React, { useEffect, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
} from "react-native";
import {
  BackButtonClick,
  Card,
  Description,
  FavoriteButtonClick,
  NameMovie,
  NavBack,
  PhotoMovie,
  Row,
  RowCard,
  Sinopse,
  SubTitle,
  Title,
} from "./styles";
import { Scroll } from "@/utils/global";
import { Observer } from "mobx-react-lite";
import {
  BackButtonIcon,
  CalendarIcon,
  FavoriteButtonIcon,
  FavoriteIcon,
  LikeIcon,
  NotificationIcon,
} from "@/assets/svgs";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "@/mobx";
import AlertFavorite from "@/components/AlertFavorite";

const MovieDetail: React.FC = ({ route }) => {
  const navigation = useNavigation();
  const { favoriteStore } = useStore();
  const movie = route.params;
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [favoriteMovie, setFavoriteMovie] = useState(false);
  const [addFavoriteMovie, setAddFavoriteMovie] = useState(false);
  const [removeFavoriteMovie, setRemoveFavoriteMovie] = useState(false);

  useEffect(() => {
    const isFavorite = favoriteStore.isFavorite(movie);
    setFavoriteMovie(isFavorite);
  }, [favoriteStore, movie]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition > 150) {
      setNavbarBackground("#16171B");
    } else {
      setNavbarBackground("transparent");
    }
  };

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleAddFavorite = () => {
    if (favoriteMovie) {
      favoriteStore.removeFavorite(movie);
      setRemoveFavoriteMovie(true);
      setTimeout(() => {
        setRemoveFavoriteMovie(false);
        navigation.goBack();
      }, 2000);
    } else {
      favoriteStore.addFavorite(movie);
      setAddFavoriteMovie(true);
      setTimeout(() => {
        setAddFavoriteMovie(false);
      }, 2000);
    }
    setFavoriteMovie(!favoriteMovie);
  };

  return (
    <Observer>
      {() => (
        <>
          <SafeAreaView />
          <NavBack style={{ backgroundColor: navbarBackground }}>
            <BackButtonClick onPress={() => navigation.goBack()}>
              <BackButtonIcon />
            </BackButtonClick>
            <FavoriteButtonClick onPress={handleAddFavorite}>
              <FavoriteButtonIcon favoriteMovie={favoriteMovie} />
            </FavoriteButtonClick>
          </NavBack>
          <Scroll onScroll={handleScroll} scrollEventThrottle={16}>
            <PhotoMovie
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
            />
            <NameMovie>{movie.original_title}</NameMovie>
            <Sinopse>SINOPSE</Sinopse>
            <Description>{movie.overview}</Description>
            <Row>
              <Card>
                <RowCard>
                  <LikeIcon />
                  <Title>Popularidade</Title>
                </RowCard>
                <SubTitle>{movie.popularity}</SubTitle>
              </Card>
              <Card>
                <RowCard>
                  <FavoriteIcon />
                  <Title>Votação</Title>
                </RowCard>
                <SubTitle>{movie.vote_average}</SubTitle>
              </Card>
            </Row>
            <Row>
              <Card>
                <RowCard>
                  <CalendarIcon />
                  <Title>Postagem</Title>
                </RowCard>
                <SubTitle>{formatDate(movie.release_date)}</SubTitle>
              </Card>
              <Card>
                <RowCard>
                  <NotificationIcon />
                  <Title>Contagem Votos</Title>
                </RowCard>
                <SubTitle>{movie.vote_count}</SubTitle>
              </Card>
            </Row>
          </Scroll>
          {addFavoriteMovie && <AlertFavorite />}
          {removeFavoriteMovie && <AlertFavorite isRemove />}
          <SafeAreaView />
        </>
      )}
    </Observer>
  );
};

export default MovieDetail;
