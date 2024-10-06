import React, {useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({lists, setLists, onDel}) {

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(ls => setLists(ls))
  }, [])
  
  return (
    <main>
      <ul className="cards">
        {lists.map(ls=> <ListingCard key= {ls.id} li = {ls} onDelete = {onDel} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
