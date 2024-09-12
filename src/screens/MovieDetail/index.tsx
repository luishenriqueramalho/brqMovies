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
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useStore } from "@/mobx";
import AlertFavorite from "@/components/AlertFavorite";
import { RootStackParamList } from "@/navigators/types";

type MovieDetailScreen = RouteProp<RootStackParamList, "MovieDetail">;

const MovieDetail: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<MovieDetailScreen>();
  const { favoriteStore } = useStore();
  const URL_IMG = process.env.URL_IMG;
  const { place } = route.params;
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [favoriteMovie, setFavoriteMovie] = useState(false);
  const [addFavoriteMovie, setAddFavoriteMovie] = useState(false);
  const [removeFavoriteMovie, setRemoveFavoriteMovie] = useState(false);

  useEffect(() => {
    const isFavorite = favoriteStore.isFavorite(place);
    setFavoriteMovie(isFavorite);
  }, [favoriteStore, place]);

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
      favoriteStore.removeFavorite(place);
      setRemoveFavoriteMovie(true);
      setTimeout(() => {
        setRemoveFavoriteMovie(false);
        navigation.goBack();
      }, 2000);
    } else {
      favoriteStore.addFavorite(place);
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
                uri: `${URL_IMG}${place.poster_path}`,
              }}
            />
            <NameMovie>{place.original_title}</NameMovie>
            <Sinopse>SINOPSE</Sinopse>
            <Description>{place.overview}</Description>
            <Row>
              <Card>
                <RowCard>
                  <LikeIcon />
                  <Title>Popularidade</Title>
                </RowCard>
                <SubTitle>{place.popularity}</SubTitle>
              </Card>
              <Card>
                <RowCard>
                  <FavoriteIcon />
                  <Title>Votação</Title>
                </RowCard>
                <SubTitle>{place.vote_average}</SubTitle>
              </Card>
            </Row>
            <Row>
              <Card>
                <RowCard>
                  <CalendarIcon />
                  <Title>Postagem</Title>
                </RowCard>
                <SubTitle>{formatDate(place.release_date)}</SubTitle>
              </Card>
              <Card>
                <RowCard>
                  <NotificationIcon />
                  <Title>Contagem Votos</Title>
                </RowCard>
                <SubTitle>{place.vote_count}</SubTitle>
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
