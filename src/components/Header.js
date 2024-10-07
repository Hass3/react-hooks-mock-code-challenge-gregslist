import React, { useState }  from "react";
import Search from "./Search";


function Header({lists, setLists, orginal,  setOrgin}) {
const [sort, setSort]= useState(false)



  function handleClick(){
    setSort((sort) => !sort)
    const sortedLists = [...lists].sort((a,b)=> a.location.localeCompare(b.location))
    if(!sort){
      setLists(sortedLists)
    }
    else{setLists(orginal)}
  }



  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search li ={lists} setLi ={setLists} orginalListings ={orginal} setOrginalListing={setOrgin} setS={setSort} />
      <button  onClick ={handleClick}>{!sort ? "Click To sort" : "Set Back"}</button>
     
    </header>
  );
}

export default Header;
