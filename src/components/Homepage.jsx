import React from "react";
import Rankings from "./Rankings"

function Homepage(props) {
  const {url, page} = props;

  return (
    <div>
      <Rankings
        url={url}
        page={page}
        popularity={false}
      />
    </div>

  )
}

export default Homepage;
