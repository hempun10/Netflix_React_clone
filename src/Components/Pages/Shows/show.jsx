import React, { useEffect, useState } from "react";
import "./show.scss";
import axios from "axios";
import { Card } from "../../Row/Row";

// https://api.themoviedb.org/3/tv/66732/similar?api_key=37b0b3a46dbe8139100d1f7c07069e28
const api_key = "37b0b3a46dbe8139100d1f7c07069e28";
const url = "https://api.themoviedb.org/3/tv/66732/similar";
const imgUrl = "https://image.tmdb.org/t/p/original";

const show = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}?api_key=${api_key}`);
      setShows(results);
    };
    fetchShows();
  }, []);
  return (
    <div className="show-container">
      <h1 className="title">Shows</h1>
      {shows.map((show, index) => {
        return <Card img={`${imgUrl}${show.poster_path}`} key={index} />;
      })}
    </div>
  );
};

export default show;
