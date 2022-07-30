import React from "react";
import AnimeList from "./AnimeList"
import SearchBar from "./SearchBar"
import PageHeading from "./PageHeading"

function Home(props) {
  const {url, page, onDataChange, data, query, filter, totalPages} = props;

  return (
    <div>
    <PageHeading title={props.title}/>
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
