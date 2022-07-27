import React from "react";
import Header from "./Header"
import Home from "./Home"
import TopAnime from "./TopAnime"
import Popular from "./Popular"
import Recommend from "./Recommend"
import {Routes, Route} from "react-router-dom"

function App() {
  const url = "https://api.jikan.moe/v4";
  
  return (
    <div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home
            url={url}
            page={1}
          />} />
          <Route path="/home" element={<Home
            url={url}
            page={1}
          />} />
          <Route path="/top" element={<TopAnime
            url={url}
            page={1}
          />} />
          <Route path="popular" element={<Popular
            url={url}
            page={1}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
