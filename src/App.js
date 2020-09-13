import React, {useEffect} from "react";
import Login from "./components/login";
import Home from "./components/home";
import { Provider } from "react-redux";
import { store } from "./index";
import { getInitialData } from "./components/actions/shared";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {useDispatch} from "react-redux"
import {connect} from 'react-redux'

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInitialData());
        return () => {

        }
    }, [dispatch]);

  return (
      <Router>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/home/" render={() => <Home />} />
      </Router>
  );
}


function mapStateToProps(state) {
  const authUser = state.authUser ? state.users[state.authUser] : null;
  return {
      authUser,
      isLoggedIn: !!authUser
  }
}
export default connect(mapStateToProps)(App)



