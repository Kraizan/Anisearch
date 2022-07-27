import React, {useState, useEffect} from "react";
import Pagination from '@mui/material/Pagination';
import Card from "./Card";
import Loading from "./Loading";
import FetchData from "./FetchData"

function AnimeList(props){
  var {url, page, filter} = props;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  function handleSetChanges(res){
    setData(res.animeData);
    setTotalPages(res.pagination.last_visible_page);
  }

  useEffect(function effectFunction(){
    setLoading(true);
    FetchData(url, currentPage, null, filter)
    .then(res => {
      handleSetChanges(res);
      setLoading(false);
    });
    setCurrentPage(currentPage);
  }, [currentPage])

  function handleChange(event, value) {
    page = value;
    setCurrentPage(page)
  }

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
            <Pagination count={totalPages} className="pagination" page={currentPage} onChange={handleChange} />
          </div>
      }
    </div>
  )
}

export default AnimeList;
