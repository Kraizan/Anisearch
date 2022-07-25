import React, {useState, useEffect} from "react";
import axios from "axios"
import Pagination from '@mui/material/Pagination';
import Card from "./Card";

function Rankings(props){
  const {url} = props;
  var page = props.page;
  const animeData = [];
  const [fetchData, setFetchData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(function effectFunction() {
    async function fetchData(currentPage) {
      const response = await axios.get(
        url + (props.popularity ? "&" : "?") + "page=" + currentPage);
      const res = await response.data;
      setFetchData(res.data);
      setTotalPages(res.pagination.last_visible_page);
    }
    fetchData(currentPage);
  }, [currentPage]);

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

  function handleChange(event, value) {
    page = value;
    setCurrentPage(page);
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
      <Pagination count={totalPages} className="pagination" page={currentPage} onChange={handleChange} />
    </div>
  )
}

export default Rankings;
