import React from "react";
import HashLoader from "react-spinners/HashLoader";

function Loading(){
  return (
    <HashLoader
      color="#2db3ac"
      className="loader"
      cssOverride={{
        position: 'fixed',
        top: '46%',
        left: '46%'
      }}
      size={120}
      speedMultiplier={0.8}
    />
  )
}

export default Loading;
