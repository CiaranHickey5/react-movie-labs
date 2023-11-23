import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export const MoviesContext = React.createContext(null);

const NowPlayingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "nowPlaying",
    getNowPlayingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const nowPlayingMovies = data.results;

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={nowPlayingMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};

export default NowPlayingMoviesPage;
