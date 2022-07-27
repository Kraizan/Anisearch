import React from "react";
import AnimeList from "./AnimeList"

function Popular(props) {
  const {url, page} = props;

  return (
    <div>
      <AnimeList
        url={url}
        page={page}
        filter="popularity"
      />
    </div>
  )
}

export default Popular;
