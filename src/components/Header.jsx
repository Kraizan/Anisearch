import React from "react";
import TemporaryDrawer from "./DrawerMenu";

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
        <TemporaryDrawer
          data={["Top", "Popular", "Recommend", "Trace"]}
        />
      </div>
    </header>
  )
}

export default Header;
