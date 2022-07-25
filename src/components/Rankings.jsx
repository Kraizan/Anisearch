import React, {useState, useEffect} from "react";
import axios from "axios"
import Card from "./Card";

function Rankings(props){
  const {url} = props;
  console.log(url)
  const animeData = [];
  const [fetchData, setFetchData] = useState({});

  useEffect(function effectFunction() {
    async function fetchData() {
      const response = await axios.get(url);
      const res = await response.data;
      setFetchData(res.data);
    }
    fetchData();
  }, [url]);
  console.log(fetchData);
  for (var i = 0; i < fetchData.length; i++) {
    const currentAnime = fetchData[i];
    animeData.push({
      id: currentAnime.mal_id,
      name: currentAnime.title,
      type: currentAnime.type,
      rank: currentAnime.rank,
      popularity: currentAnime.popularity,
      score: currentAnime.score,
      year: currentAnime.aired.prop.from.year,
      episodes: currentAnime.episodes,
      url: currentAnime.images.jpg.image_url,
    });
  }

  return (
    <div className="ranking-div">
      {animeData.map((anime) => {
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
