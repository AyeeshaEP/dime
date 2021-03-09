import React from 'react'

export default function Series(props) {
  const { series } = props;

  return (
    <div>
      <h3>Series</h3>
      {series.map((series) => (
        <p key={series.id}>{series.name}</p>
      ))}
    </div>
  )
}
