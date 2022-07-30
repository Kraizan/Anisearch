import React from "react";
import AnimeList from "./AnimeList"
import PageHeading from "./PageHeading"

function TopAnime(props) {
  const {url, page, onDataChange, data, totalPages} = props;

  return (
    <div>
      <PageHeading title={props.title}/>
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
