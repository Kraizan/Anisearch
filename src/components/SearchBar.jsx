import React, { useState } from "react"
import TextField from '@mui/material/TextField'
import SearchButton from "./SearchButton"

function SearchBar(props){
  const {url, page, multiple} = props;

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
        query={search}
        url={url}
        page={page}
        multiple={multiple}
      />
    </div>
  )
}

export default SearchBar;
