import React, {useState, useEffect} from "react";
import axios from "axios"
import Rankings from "./Rankings"

function Homepage() {
  const topAnimeUrl = "https://api.jikan.moe/v4/top/anime";
  const animeData = [];
  const [fetchData, setFetchData] = useState({});

  useEffect(function effectFunction() {
    async function fetchData() {
      const response = await axios.get(topAnimeUrl);
      const res = await response.data;
      setFetchData(res.data);
    }
    fetchData();
  }, []);
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
    <Rankings
      data={animeData}
    />
  )
}

export default Homepage;
