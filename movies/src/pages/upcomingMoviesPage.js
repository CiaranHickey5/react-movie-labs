import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // Fetch upcoming movies from the TMDb API when the component mounts
    getUpcomingMovies().then((data) => {
      setUpcomingMovies(data);
    });
  }, []);

  return <PageTemplate title="Upcoming Movies" movies={upcomingMovies} />;
};

export default UpcomingMoviesPage;
