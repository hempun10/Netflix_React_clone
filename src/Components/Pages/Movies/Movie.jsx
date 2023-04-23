import React, { useEffect, useState } from "react";
import "./movie.scss";
import axios from "axios";
import Row, { Card } from "../../Row/Row";
import Loading from "../../Loading/Loading";

const apiKey = "37b0b3a46dbe8139100d1f7c07069e28";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/upcoming/?api_key=${apiKey}&$page={page}`
      );
      setMovies((prev) => [...results, ...prev]);
      setLoading(false);
    };
    fetchMovie();
  }, [page]);
  const handleScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      throw new error(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <h1 className="title">Movies🍿</h1>
      <div className="movie-container">
        {movies.map((movie, index) => {
          return <Card key={index} img={`${imgUrl}/${movie.poster_path}`} />;
        })}
        {loading && <Loading />}
      </div>
    </>
  );
};

export default Movie;
