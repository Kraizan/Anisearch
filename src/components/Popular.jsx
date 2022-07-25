import React from "react";
import Rankings from "./Rankings"

function Popular(props) {
  const {url} = props;
  return (
    <div>
      <Rankings
        url={url}
      />
    </div>
  )
}

export default Popular;
