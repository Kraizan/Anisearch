import React from "react";
import AnimeList from "./AnimeList"

function TopAnime(props) {
  const {url, page} = props;

  return (
    <div>
      <AnimeList
        url={url}
        page={page}
      />
    </div>
  )
}

export default TopAnime;
