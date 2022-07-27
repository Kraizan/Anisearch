import React, { useState } from "react"
import TextField from '@mui/material/TextField'
import SearchButton from "./SearchButton"

function SearchBar(props){
  const {url, page, onDataChange, data, query, filter, totalPages} = props;

  const [search, setSearch] = useState("");

  function handleChange(event){
    setSearch(event.target.value);
  }
  return (
    <div className="search-bar">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        color="success"
        value={search}
        onChange={handleChange}
        placeholder="Search for an anime..."
        sx={{
          width: "80%",
          margin: "auto 1%"
        }}
      />
      <SearchButton
        url={url}
        page={page}
        onDataChange={onDataChange}
        data={data}
        query={search}
        filter={filter}
        totalPages={totalPages}
        setSearch={setSearch}
      />
    </div>
  )
}

export default SearchBar;
