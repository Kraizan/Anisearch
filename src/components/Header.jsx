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
        <a className="nav-link" href="/">Top Rated</a>
        <a className="nav-link" href="popular">Popular</a>
        <a className="nav-link" href="recommend">Recommend</a>
        <a className="nav-link" href="trace">Trace</a>
      </div>
    </header>
  )
}

export default Header;
