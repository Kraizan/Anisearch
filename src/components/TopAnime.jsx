import React from "react";
import AnimeList from "./AnimeList"

function TopAnime(props) {
  const {url, page, onDataChange, data, totalPages} = props;

  return (
    <div>
      <AnimeList
        url={url}
        page={page}
        filter={null}
        onDataChange={onDataChange}
        data={data}
        query={null}
        totalPages={totalPages}
      />
    </div>
  )
}

export default TopAnime;
