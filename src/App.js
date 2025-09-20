import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {

  function Common() {
    return <div>Common Component</div>
  }

  return (
    <>
    <div className="App">
      <h1>Hello World !!</h1>
      <Users/>
      {/* {Common()} */}
      <Common />
    </div> 
    
    </>
    

  );
}


export default App;
