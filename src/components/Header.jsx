import React from "react";

function Header(){
  return (
    <header id="top" class="navbar">
      <div class="brand-name">
        Anisearch
      </div>
      <div class="brand-tagline">
        Find your next anime.
      </div>
      <div class="nav-list">
        <a class="nav-link" href="top">Top Rated</a>
        <a class="nav-link" href="top">Popular</a>
        <a class="nav-link" href="top">Recommend</a>
        <a class="nav-link" href="top">Trace</a>
      </div>
    </header>
  )
}

export default Header;
