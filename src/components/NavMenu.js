import React from "react";
import { icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Home from "./home";
import { useHistory, Link } from "react-router-dom";
import setAuthedUser from "./actions/authedusers";

function NavMenu() {
  const authUser = useSelector((state) => state.authUser);
  const state = useSelector((state) => state);
  const history = useHistory();
  const handleLogOut = (event) => {
    event.preventDefault();
    setAuthedUser("");
    history.push("/");
  };

  return (
    <div className="ui secondary pointing menu">
      <Link to={`/home`}>Home</Link>
      <Link to={`/leaderboard`}> -----Leaderboard </Link>
      <Link to={`/add`}>-----Create new poll </Link>

      <div className="right menu">
        <a className="item">
          {state.users[state.authUser.userId].avatarURL ? (
            <img src={state.users[state.authUser.userId].avatarURL} />
          ) : (
            <i className="user circle icon"></i>
          )}
          Hi {state.users[state.authUser.userId].name}!
        </a>

        <button className="item" onClick={handleLogOut}>
          <i className="sign out alternate icon"></i>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default NavMenu;
