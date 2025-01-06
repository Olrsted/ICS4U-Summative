import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Feature.css";

function Feature() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const nowPlayingResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
        );

        const moviesData = nowPlayingResponse.data.results;

        const shuffledMovies = moviesData
          .sort(() => 0.5 - Math.random())
          .slice(0, 12);

        setNowPlayingMovies(shuffledMovies);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="feature-container">
      <div className="feature-list-container">
        <div className="titles-container">
          <span className="feature-list-title">Now Playing</span>
          <span
            className="feature-list-more"
            onClick={() => navigate("/movies")}
          >
            See more
          </span>
        </div>
        <div className="feature-list-wrapper">
          <div className="feature-list">
            {nowPlayingMovies.map((movie, index) => (
              <div
                key={index}
                className="feature-list-item"
                onClick={() => navigate(`/movies/details/${movie.id}`)}
              >
                <img
                  className="feature-list-item-img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <span className="feature-list-item-title">{movie.title}</span>
                <p className="feature-list-item-description">
                  {movie.overview.length > 150
                    ? movie.overview.substring(0, 150) + "..."
                    : movie.overview}
                </p>
                <button className="feature-list-item-button">Watch Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
