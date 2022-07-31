import React from "react";
import TemporaryDrawer from "./DrawerMenu";

function Header(){
  return (
    <header id="top" className="navbar">
      <div className="brand-name">
        <a href="/">AniSearch</a>
      </div>
      <div className="nav-list">
        <TemporaryDrawer
          data={["Home", "Airing", "Top", "Popular"]}
        />
      </div>
    </header>
  )
}

export default Header;
