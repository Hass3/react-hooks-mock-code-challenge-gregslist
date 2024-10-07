import react, {useState} from "react";


function NewList({onNewList}){
    const [nameValue, setNameValue]= useState('');
    const[locationValue, setLocationValue]= useState('');
    const[imageValue, setImageValue]=useState('');

    function handleSubmit(e){
        e.preventDefault();
       const newList ={
        description: nameValue,
        image: imageValue,
        location: locationValue
       }
       fetch("http://localhost:6001/listings", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newList)
       })
       .then(r=>r.json())
       .then(list=> onNewList(list))
    }



    return(
        <form onSubmit={handleSubmit}>
            <input value ={nameValue} onChange={(e)=>setNameValue(e.target.value)}placeholder="Enter Name" />
            <input value={locationValue} onChange={(e)=>setLocationValue(e.target.value)} placeholder="Enter Location" />
            <input value={imageValue} onChange={(e)=>setImageValue(e.target.value)} placeholder= "Enter Image"/>
           <button>submit</button>
        </form>
    )



}



export default NewList