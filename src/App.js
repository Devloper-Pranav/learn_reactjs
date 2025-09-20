import React, {useState} from "react";
import './App.css';
import UserCard from "./UserCard";

function App() {

  // Example 3
  const [name, setName] = useState("Pranav Kumar");


  // Example 2 - Multiple props
  // const userData = [
  //   {"name": "Prajakta", age:22, "email": "umpraj12@gmail.com"},
  //   {"name": "Mansi", age:25, "email": "chmansi45@gmail.com"},
  //   {"name": "Baladri", age:28, "email": "ydbaldri65@gmail.com"},
  //   {"name": "Sharad", age:45, "email": "chsharad32@gmail.com"}
  // ];

return (
    <>
    <div className="App">
      <h1>Props in React</h1>

      {/* <UserCard name="Pranav Kumar" /> */}

      <UserCard name={name} />

      {/* Example 3 */}
      <button onClick={()=> setName("Codeitsolutonhub")}>Update Props</button>

      {/* Example 2 */}
      {/* {userData.map((user,index) => (
          <UserCard
            key = {index}
            name = {user.name}
            age = {user.age}
            email = {user.email}
          />
      ))} */}

      

    </div> 
    
    </>
    

  );
  
}


export default App;
