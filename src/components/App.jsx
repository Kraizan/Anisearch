import React, {useState} from "react";
import Header from "./Header"
import Home from "./Home"
import TopAnime from "./TopAnime"
import Popular from "./Popular"
import Recommend from "./Recommend"
import FetchData from "./FetchData"
import Pagination from '@mui/material/Pagination'
import {Routes, Route} from "react-router-dom"

function App() {
  const url = "https://api.jikan.moe/v4";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(null);
  const [filter, setFilter] = useState("airing");

  function handleSetChanges(url, page, query, filter) {
    setFilter(filter);
    setQuery(query);
    setPage(page);
    FetchData(url, page, query, filter)
    .then(function(res){
      setData(res.animeData);
      setTotalPages(res.pagination.last_visible_page);
    });
  }

  function handleChange(event, value) {
    setPage(value);
    handleSetChanges(url, value, query, filter);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home
            url={url}
            page={1}
            onDataChange={handleSetChanges}
            data={data}
            query={query}
            filter={filter}
            totalPages={totalPages}
          />} />
          <Route path="/home" element={<Home
            url={url}
            page={1}
            onDataChange={handleSetChanges}
            data={data}
            query={query}
            filter={filter}
            totalPages={totalPages}
          />} />
          <Route path="/top" element={<TopAnime
            url={url}
            page={1}
            onDataChange={handleSetChanges}
            data={data}
            totalPages={totalPages}
          />} />
          <Route path="/popular" element={<Popular
            url={url}
            page={1}
            onDataChange={handleSetChanges}
            data={data}
            totalPages={totalPages}
          />} />
          <Route path="/recommend" element={<Recommend/>} />
        </Routes>
        <Pagination count={totalPages} className="pagination" page={page} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
