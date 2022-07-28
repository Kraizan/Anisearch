import React, {useState, useEffect} from "react";
import AnimeCard from "./AnimeCard";
import Loading from "./Loading"

function AnimeList(props){
  var {url, page, filter, onDataChange, data, query} = props;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch(){
      await onDataChange(url, page, query, filter);
    }
    fetch();
  },[])

  return (
    <div>
      {
        loading
        ? <Loading />
        : <div className="ranking-div">
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
      }
    </div>
  )
}

export default AnimeList;
