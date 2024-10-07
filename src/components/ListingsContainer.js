import React, {useEffect} from "react";
import ListingCard from "./ListingCard";
import NewList from "./NewList";
function ListingsContainer({lists, setLists, onDel,setOrgin, onNew}) {



  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(ls => {
      setLists(ls)
      setOrgin(ls)
  })
  }, [])
  
  return (
    <main>
       <NewList onNewList={onNew} />
      <ul className="cards">
        {lists.map(ls=> <ListingCard key= {ls.id} li = {ls} onDelete = {onDel} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
