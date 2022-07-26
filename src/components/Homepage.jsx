import React from "react";
import AnimeList from "./AnimeList"

function Homepage(props) {
  const {url, page} = props;

  return (
    <div>
      <AnimeList
        url={url}
        page={page}
        popularity={false}
      />
    </div>

  )
}

export default Homepage;
