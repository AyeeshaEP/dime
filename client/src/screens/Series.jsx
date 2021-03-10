import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Series.css';


export default function Series(props) {
  const { series, getPlatform } = props;
  const { name } = useParams()


  return (
    <div>
      <h3>getPlatform</h3>
      {getPlatform(name).map((series) => (
        <Link to={`/series-select/${series.id}`}>
          <p key={series.id}>{series.title}</p>
          </Link>
      ))}
    </div>
  )
}
