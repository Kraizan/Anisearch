import React from "react"

export default function PageHeading(props){
  return (
    <div className="page-header">
      <h2 className="info-section-heading">{props.title}</h2>
    </div>
  )
}
