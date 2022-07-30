import React, {useState} from "react";
import Header from "./Header"
import Home from "./Home"
import Airing from "./Airing"
import TopAnime from "./TopAnime"
import Popular from "./Popular"
import AnimeDetails from "./AnimeDetails"
import FetchData from "./FetchData"
import Pagination from '@mui/material/Pagination'
import {Routes, Route} from "react-router-dom"
import Backdrop from "./Loading"


function App() {
  const url = "https://api.jikan.moe/v4";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(null);
  const [filter, setFilter] = useState("airing");
  const [open, setOpen] = useState(false);

  function handleSetChanges(url, page, query, filter) {
    setFilter(filter);
    setQuery(query);
    setPage(page);
    setOpen(true);
    FetchData(url, page, query, filter)
    .then(function(res){
      setData(res.animeData);
      setTotalPages(res.pagination.last_visible_page);
      setOpen(false);
    });

  }

  function handleChange(event, value) {
    setPage(value);
    handleSetChanges(url, value, query, filter);
  }

  return (
    <div>
      <Header />
      <Backdrop open={open}/>
      <div className="content">
        <Routes>
          <Route path="/anime/home" element={<div>
            <Home
              url={url}
              page={1}
              onDataChange={handleSetChanges}
              data={data}
              query={query}
              filter={filter}
              totalPages={totalPages}
            />
            <Pagination
              count={totalPages}
              className="pagination"
              page={page}
              onChange={handleChange}
            />
          </div>} />
          <Route path="/anime/airing" element={<div>
            <Airing
              title="Currently Airing"
              url={url}
              page={1}
              onDataChange={handleSetChanges}
              data={data}
              query={query}
              filter={filter}
              totalPages={totalPages}
            />
            <Pagination
              count={totalPages}
              className="pagination"
              page={page}
              onChange={handleChange}
            />
          </div>} />
          <Route path="/anime/top" element={<div>
            <TopAnime
              title="Top Rated"
              url={url}
              page={1}
              onDataChange={handleSetChanges}
              data={data}
              totalPages={totalPages}
            />
            <Pagination
              count={totalPages}
              className="pagination"
              page={page}
              onChange={handleChange}
            />
          </div>} />
          <Route path="/anime/popular" element={<div>
            <Popular
              title="Most Popular"
              url={url}
              page={1}
              onDataChange={handleSetChanges}
              data={data}
              totalPages={totalPages}
            />
            <Pagination
              count={totalPages}
              className="pagination"
              page={page}
              onChange={handleChange}
            />
          </div>} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
