import React from "react";
import Search from "./Search";

function Header({lists, setLists}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search li ={lists} setLi ={setLists} />
    </header>
  );
}

export default Header;
