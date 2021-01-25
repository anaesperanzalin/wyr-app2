import React, { useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { getInitialData } from "./components/actions/shared";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import "./index.css";
import QuestionDetails from "./components/QuestionDetails";
import NewPoll from "./components/newpoll";
import LeaderBoard from "./components/leaderboard";
import NoMatch from "./components/NoMatch"

function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  const authUser = useSelector((state) => state.authUser);

  return (
    <Router>
      <Switch>
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/add" 
        render={() => (authUser && authUser.userId ? <NewPoll /> : <Login />) } />
      <Route exact path="/404" render={() => <NoMatch />} />
      <Route exact path="/leaderboard" 
      render={() => (authUser && authUser.userId ? <LeaderBoard/> : <Login/>)} />

      <Route
        exact path="/home/"
        render={() => (authUser && authUser.userId ? <Home /> : <Login />)}      />




      <Route
        exact path="/question/:id"
        render={({ match }) => {
          
          return authUser && authUser.userId ? (
            <QuestionDetails 
            id={match.params.id} />
          ) : (
            <Login />
          );
        }}
      />
      <Route path ="*"> <NoMatch/></Route> 
      </Switch>
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
