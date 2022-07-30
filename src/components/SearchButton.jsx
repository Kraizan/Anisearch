import React from "react"
import Button from '@mui/material/Button'
import {Routes, Route} from "react-router-dom"

function SearchButton(props){
  const {url, onDataChange, query, setSearch} = props;

  async function handleClick(){
    await onDataChange(url, 1, query, "members")
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
