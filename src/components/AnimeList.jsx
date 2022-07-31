import React, {useEffect} from "react";
import AnimeCard from "./AnimeCard";

function AnimeList(props){
  var {url, page, filter, onDataChange, data, query} = props;

  useEffect(() => {
    async function fetch(){
      await onDataChange(url, page, query, filter);
    }
    fetch();
    // eslint-disable-next-line
  },[])

  return (
    <div className="ranking-div">
      {data.map((anime) => {
          return (
            <AnimeCard
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
