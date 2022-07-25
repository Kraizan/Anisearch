import React from "react";

function Card(props){
  return (
    <div className="anime-card">
      <img className="anime-image" src={props.url} alt={props.name}></img>
      <h2 className="anime-title">{props.name}</h2>
      <div className="card-desc">
        <div className="card-col">
          <p>Score: {props.score}</p>
          <p>Rank: {props.rank}</p>
          <p>Popularity: {props.popularity}</p>
        </div>
        <div className="card-col">
          <p>Type: {props.type}</p>
          <p>Year: {props.year}</p>
          <p>Episodes: {props.episodes}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
