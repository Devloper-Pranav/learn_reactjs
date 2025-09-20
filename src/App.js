import React, {Component} from "react";
import './App.css';

// class App extends React.Component {
class App extends Component {

  constructor(){
    super();

    this.state = {
      // data: "how are you i am fine."
      data: 1,
    }
  }

  demo(){
    // alert("Class Component");

    this.setState({
      // data:"Pranav Kumar"
      data: this.state.data + 1,
    });
  }

  render(){
    console.log(this.state.data);

    return (
    <>
    <div className="App">
      {/* <h1>Class Component</h1> */}
      <h1>{this.state.data}</h1>

      <button onClick={ ()=>this.demo() }>Click Me</button>
    </div> 
    
    </>
    

  );
  }
  
}


export default App;
