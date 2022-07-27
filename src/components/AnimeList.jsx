import React, {useState, useEffect} from "react";
import Card from "./Card";
import Loading from "./Loading";
import FetchData from "./FetchData"

function AnimeList(props){
  var {url, page, filter, onDataChange, data, query, totalPages} = props;

  const [loading, setLoading] = useState(true);

  useEffect(function effectFunction(){
    onDataChange(url, page, query, filter);
    setLoading(false);
  }, [])

  return (
    <div>
      {
        loading
        ? <Loading />
        : <div className="ranking-div">
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
      }
    </div>
  )
}

export default AnimeList;
