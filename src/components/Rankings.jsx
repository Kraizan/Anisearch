import React from "react";
import Card from "./Card";

function Rankings(props){
  const {data} = props;
  return (
    <div className="ranking-div">
      {data.map((anime) => {
           return (
             <Card
               key= {anime.id}
               id= {anime.id}
               name= {anime.name}
               type= {anime.type}
               rank= {anime.rank}
               popularity= {anime.popularity}
               score= {anime.score}
               year= {anime.year}
               episodes= {anime.episodes}
               url= {anime.url}
             />
           );
      })}
    </div>
  )
}

export default Rankings;
