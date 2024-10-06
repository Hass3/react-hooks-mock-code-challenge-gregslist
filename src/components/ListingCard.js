import React, {useState} from "react";

function ListingCard({li, onDelete}) {
  const [fav, setFav]= useState(false)

  function handleFavClick(){
    setFav(fav => !fav)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${li.id}`, {
      method : "DELETE"
    })
    .then(r=>r.json())
    .then(()=> onDelete(li))
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={li.image} alt={li.description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{li.description}</strong>
        <span> · {li.location}</span>
        <button onClick ={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
