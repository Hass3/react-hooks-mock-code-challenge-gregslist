import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[originalListings, setOrginalListing]= useState([])
  const [listings, setListings]= useState([]);

  function handleOnDelete(selectedList){
    const updatedLists = listings.filter(l => l.id !== selectedList.id);
    setListings(updatedLists)
  }

  function onNewList (newListing){
    const updatedLists = [...listings, newListing]
    setListings(updatedLists)
    setOrginalListing(updatedLists)
  }

  return (
    <div className="app">
      <Header lists = {listings} setLists ={setListings} orginal ={originalListings} setOrgin={setOrginalListing}/>
      <ListingsContainer  onNew={onNewList} lists = {listings} setLists={setListings} onDel ={handleOnDelete} orginal ={originalListings} setOrgin={setOrginalListing} />
    </div>
  );
}

export default App;





















// 1: I can sort the listings alphabetically by location.
// 2 : I can create a new listing by submitting a form, and persist the changes to the backend.

// HOW TO ACHIVE 
// 1: create a sort button in my search.js when clicked the items should sort out alphabeticlly and the Disabled class should show.