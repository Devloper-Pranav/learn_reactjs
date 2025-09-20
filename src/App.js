import React, {useState} from "react";
import './App.css';
import Counter from "./Counter";

function App() {

  //Example 1
  // let data = "how are you i am fine.";
  let [data,setData] = useState("how are you i am fine.");

  const updateData = () => {
    setData("Pranav Kumar");
    alert(data);
  }

  console.log("Rendre------------");

  return (
    <>
    <div className="App">
      {/* <h1>State</h1> */}
      <h1>{data}</h1>

      <button onClick={updateData}>Update Value</button>
      <br/><br/>

      <Counter />
    </div> 
    
    </>
    

  );
}


export default App;
