import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );
  const { addToWatchList } = useContext(MoviesContext); // Consume MoviesContext

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return (
          <PlaylistAddIcon onClick={() => addToWatchList(movie)} /> // Add onClick handler
        );
      }}
    />
  );
};
export default UpcomingMoviesPage;
