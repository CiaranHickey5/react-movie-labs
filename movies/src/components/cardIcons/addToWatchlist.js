import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
  };

  return (
    <PlaylistAddIcon
      aria-label="add to watchlist"
      color="primary"
      fontSize="large"
      onClick={handleAddToWatchlist}
    />
  );
};

export default AddToWatchlistIcon;
