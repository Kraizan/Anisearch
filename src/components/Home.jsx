import React from "react"
import SearchBar from "./SearchBar"
import AnimeList from "./AnimeList"

function Home(props){
  const {url, page, onDataChange, data, query, filter, totalPages} = props;

  return (
    <div>
      <SearchBar
        url={url}
        page={page}
        onDataChange={onDataChange}
        data={data}
        query={query}
        filter={filter}
        totalPages={totalPages}
      />
      <AnimeList
        url={url}
        page={page}
        onDataChange={onDataChange}
        data={data}
        query={query}
        filter={filter}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Home;
