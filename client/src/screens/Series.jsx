import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Series.css";
import { useState } from "react";

export default function Series(props) {
  const { series, getPlatform } = props;
  const { name } = useParams();

  return (
    <div>
      <h1>{name}</h1>

      {getPlatform(name).map((series) => (
        <Link to={`/series-select/${series.id}`}>
          <h2 key={series.id}>{series.title}</h2>
          <img src={series.image_url} />
          <h4>{series.description}</h4>
        </Link>
      ))}
    </div>
  );
}
