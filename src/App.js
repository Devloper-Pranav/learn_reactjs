import logo from './logo.svg';
import './App.css';

function App() {

  let data = "How are you i am fine.";

  const demo = () => {
    data = "Pranav Kumar";
    // alert("Hello Everone");
    alert(data);
  }
  return (
    <>
    <div className="App">
      {/* <h1>Hello Everyone !!</h1> */}
      <h1>{data}</h1>
     {/* <button onClick={demo}>Click Me</button> */}
     {/* <button onClick={()=> alert("Hello Everyone How are you?") }>Click Me</button> */}
     <button onClick={()=> demo() }>Click Me</button>
    </div> 
    
    </>
    

  );
}


export default App;
