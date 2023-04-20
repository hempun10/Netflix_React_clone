import React, { useEffect, useState } from "react";
import "./movie.scss";
import axios from "axios";
import Row, { Card } from "../../Row/Row";

const apiKey = "37b0b3a46dbe8139100d1f7c07069e28";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/upcoming/?api_key=${apiKey}`);
      setMovies(results);
    };
    fetchMovie();
  }, []);
  return (
    <>
      <h1 className="title">Movies🍿</h1>
      <div className="movie-container">
        {movies.map((movie, index) => {
          return <Card key={index} img={`${imgUrl}/${movie.poster_path}`} />;
        })}
      </div>
    </>
  );
};

export default Movie;
