import React, { useState } from "react";


function App() {
  const [fullName, setFullName] = useState({
    fName : "",
    lName : ""
  });
  
  function handleChange(event){
    const {name, value} = event.target;
    setFullName((prev)=>{
        console.log(prev)
        if(name === "fName"){
          return{
            fName : value,
            lName : prev.lName
          }
        } 
        else if(name === "lName"){
          return{
            fName : prev.fName,
            lName : value
          }
        }
        // console.log(fullName);
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form action="">
        <input
          name="fName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          // value={fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          // value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;