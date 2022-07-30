import React from "react"

export default function InfoDiv(props){
  return (
    <div className="info-div">
      <h4 className="margin-points">{props.title}:</h4>
      {props.value.map((element) => {
        return (<p>{element.name + ","}</p>)
      })}
    </div>
  )
}
