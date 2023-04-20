import React from "react";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover-img" />;
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

export default Row;
