import React from 'react';
import Login from "./components/login";
import Home from "./components/home"
import {Provider} from 'react-redux'
import {store} from './index'
import {handleInitialData} from './components/actions/shared'


class App extends React.Component {
  componentDidMount(){
  handleInitialData();
  }
  
  render(){
    console.log(this.setstate)

    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          
          <h1>
            Welcome to the Would you Rather App. 
          </h1>

          <Login/>
            <br/>
            <br/>
          <Home/>
          
        </header>
      </div>
      </Provider>
  );
  }
  };


export default App;
