import React from "react"
import TextField from '@mui/material/TextField';

function InputBox(props){
  return (
    <TextField
      required
      color="success"
      label={props.label}
      name={props.label.toLowerCase()}
      multiline
      maxRows={props.maxRows}
      margin="dense"
      sx={{
        width: "80%"
      }}
      placeholder={props.label}
      value={props.value}
      onChange={props.onChange}
      variant="filled"
    />
  )
}

export default InputBox;
