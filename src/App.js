import React from 'react';
import Login from "./components/login";
import Home from "./components/home"
import {Provider} from 'react-redux'
import {store} from './index'
import {handleInitialData} from './components/actions/shared'
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"


class App extends React.Component {
  componentDidMount(){
  handleInitialData();
  }
  

  //to do : 1) turn it into a functional component. 
  // 2) the only thing on App should be the router and provider
  //


  render(){
    console.log(this.setstate)

    return (
      <Provider store={store}>
        <Router>
      
        <Route
              exact path="/"
              render={() => 
              <Login/> }
              />

            <Route
              path="/home/"
              render={() => 
              <Home/> }
              />
        
      </Router>
      </Provider>
  );
  }
  };


export default App;
