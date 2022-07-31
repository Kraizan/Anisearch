import React from "react"
import Button from '@mui/material/Button'

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
        backgroundColor: "#458c7a",
        width: "20%",
        height: "8.5vh",
        margin: "auto 1%"
      }}
      onClick={handleClick}
    >
      Search
    </Button>
  )
}

export default SearchButton;
