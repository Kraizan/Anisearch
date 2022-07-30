import React from "react"
import InfoDivArray from "./InfoDivArray"

export default function InfoRow(props){
  return(
    <div className="info-row">
      {props.data.map((element) => {
        return (<div>
          <InfoDivArray title={element.relation} value={element.entry} />
        </div>)
      })}
    </div>
  )
}
