import React from "react"
import Button from '@mui/material/Button';
import FetchData from "./FetchData"
import AnimeList from "./AnimeList"

function SearchButton(props){
  var {query, url, page, filter} = props;

  function handleClick(){
    FetchData(url, page, query, filter)
    .then(data => {
      console.log(url, page, query, filter);
    });
  }

  return (
    <Button
      variant="contained"
      size="large"
      color="success"
      sx={{
        width: "20%",
        margin: "auto 1%"
      }}
      onClick={handleClick}
    >
      Search
    </Button>
  )
}

export default SearchButton;
