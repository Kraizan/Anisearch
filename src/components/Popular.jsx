import React from "react";
import Rankings from "./Rankings"

function Popular(props) {
  const {url, page} = props;
  return (
    <div>
      <Rankings
        url={url}
        page={page}
        popularity={true}
      />
    </div>
  )
}

export default Popular;
