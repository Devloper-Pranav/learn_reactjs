import React, {Component} from 'react';
import './App.css';
import UserList from './UserList';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "Pranav Kumar"
    }
  }

  render(){
    return (
    <>
      <div className="App">
        <h1>Props in React</h1>
        {/* <UserList name = "Pranav Kumar" email="prankumar92@gmail.com" /> */}


        {/* Example 2 */}
        <UserList name = {this.state.name} email="prankumar92@gmail.com" />

        <button onClick={()=> this.setState({name:"Baladri Yadav"})}>Update Props</button>
      </div> 
    </>
    
  );
  }

}


export default App;
