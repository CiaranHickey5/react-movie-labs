import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToWatchlist from "../components/cardIcons/addToWatchlist";

export const MoviesContext = React.createContext(null);

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const upcomingMovies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatchlist movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;
