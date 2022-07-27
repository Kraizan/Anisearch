import React from "react"
import Button from '@mui/material/Button';
import FetchData from "./FetchData"

function SearchButton(props){
  const {url, page, onDataChange, data, query, filter, totalPages, setSearch} = props;

  function handleClick(){
    onDataChange(url, "1", query, "members")
    setSearch("");
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
