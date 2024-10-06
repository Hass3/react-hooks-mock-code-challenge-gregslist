import React, {useState} from "react";

function Search({li, setLi}) {
  const [searchValue, setSearchValue] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const searchedLi = li.filter(l=>{
      if (searchValue === l.description){
        return l
      }
    })
    setLi(searchedLi)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
