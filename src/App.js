import React, { useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { Provider } from "react-redux";
import { store } from "./index";
import { getInitialData } from "./components/actions/shared";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import "./index.css";
import QuestionDetails from "./components/QuestionDetails";
import NoMatch from "./components/NoMatch";
import NewPoll from "./components/newpoll";

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('')

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  const authUser = useSelector((state) => state.authUser);

  return (
    <Router>
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/add" render={() => <NewPoll />} />
      
      <Route
        path="/home/"
        render={() => (authUser && authUser.userId ? <Home /> : <Login />)}
      />
      <Route
        path="/question/:id"
        render={({ match }) => {
          
          return authUser && authUser.userId ? (
            <QuestionDetails 
            id={match.params.id} />
          ) : (
            <Login />
          );
        }}
      />
    </Router>
  );
}

function mapStateToProps(state) {
  const authUser = state.authUser ? state.users[state.authUser] : null;
  return {
    authUser,
    isLoggedIn: !!authUser,
  };
}
export default connect(mapStateToProps)(App);
