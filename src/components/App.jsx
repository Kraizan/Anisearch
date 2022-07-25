import React from "react";
import Header from "./Header"
import Homepage from "./Homepage"
import Popular from "./Popular"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage
          url="https://api.jikan.moe/v4/top/anime"
          page={1}
        />} />
        <Route path="popular" element={<Popular
          url="https://api.jikan.moe/v4/top/anime?filter=bypopularity"
          page={1}
        />} />
      </Routes>
    </div>
  );
}

export default App;
