import React from "react";
import AnimeList from "./AnimeList"
import SearchBar from "./SearchBar"

function Home(props) {
  const {url, page} = props;

  return (
    <div>
      <SearchBar
        url={url}
        page={page}
      />
      <AnimeList
        url={url}
        page={page}
        filter="airing"
      />
    </div>
  )
}

export default Home;
