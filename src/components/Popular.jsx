import React from "react";
import AnimeList from "./AnimeList"

function Popular(props) {
  const {url, page, onDataChange, data, totalPages} = props;

  return (
    <div>
      <AnimeList
        url={url}
        page={page}
        filter="popularity"
        onDataChange={onDataChange}
        data={data}
        query={null}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Popular;
