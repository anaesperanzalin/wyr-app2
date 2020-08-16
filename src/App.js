import React from 'react';
import Login from "./login";
import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to the Would you Rather App. 
        </p>

        <Login/>
          <br/>
          <br/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
