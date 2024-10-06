import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings]= useState([]);


  function handleOnDelete(selectedList){
    const updatedLists = listings.filter(l => l.id !== selectedList.id);
    setListings(updatedLists)
  }

  return (
    <div className="app">
      <Header lists = {listings} setLists ={setListings}/>
      <ListingsContainer lists = {listings} setLists={setListings} onDel ={handleOnDelete} />
    </div>
  );
}

export default App;



// I can search for listings by their name.
