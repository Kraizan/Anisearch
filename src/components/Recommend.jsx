import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import InputBox from "./InputBox"

const reviews = [];
function Recommend(){

  const [review, setReview] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const key = event.target.name;
    const value = event.target.value;
    setReview({...review, [key]: value})
  }

  function handleClick(){
    console.log(review.title, review.content);
    setReview({title: "", content: ""})
  }

  return (
    <div className="form">
      <FormControl
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center"
        }}
      >
        <InputBox
          label="Title"
          maxRows={2}
          value={review.title}
          onChange={handleChange}
        />
        <InputBox
          label="Content"
          maxRows={10}
          value={review.content}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  )
}

export default Recommend;
