import React from "react";
import Rankings from "./Rankings"

function Homepage(props) {
  const {url} = props;

  return (
    <div>
      <Rankings
        url={url}
      />
    </div>

  )
}

export default Homepage;
