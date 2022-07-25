import React from "react";

function Header(){
  return (
    <header id="top" className="navbar">
      <div className="brand-name">
        Anisearch
      </div>
      <div className="brand-tagline">
        Find your next anime.
      </div>
      <div className="nav-list">
        <a className="nav-link" href="top">Top Rated</a>
        <a className="nav-link" href="top">Popular</a>
        <a className="nav-link" href="top">Recommend</a>
        <a className="nav-link" href="top">Trace</a>
      </div>
    </header>
  )
}

export default Header;
