import React, {useEffect} from "react";
import Card from "./Card";

function AnimeList(props){
  var {url, page, filter, onDataChange, data, query} = props;

  useEffect(function effectFunction(){
    onDataChange(url, page, query, filter);
  },[])

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

export default AnimeList;
