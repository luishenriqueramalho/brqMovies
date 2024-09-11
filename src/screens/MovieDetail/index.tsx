import React, { useState } from "react";
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

const MovieDetail: React.FC = ({ route }) => {
  const navigation = useNavigation();
  const { favoriteStore } = useStore();
  const movie = route.params;
  const [navbarBackground, setNavbarBackground] = useState("transparent");

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
    favoriteStore.addFavorite(movie);
    console.log("Filme adicionado aos favoritos:", movie);
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
              <FavoriteButtonIcon />
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
          <SafeAreaView />
        </>
      )}
    </Observer>
  );
};

export default MovieDetail;
