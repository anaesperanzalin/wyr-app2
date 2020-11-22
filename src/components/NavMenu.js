import React from "react";
import { icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Home from "./home";
import {Link} from "react-router-dom"


function NavMenu() {
  const authUser = useSelector((state) => state.authUser);
  const state = useSelector((state) => state);

  return (
    <div className="ui secondary pointing menu">
      <Link to={`/home`}>Home</Link>
      <Link to = {`/leaderboard`}> -----Leaderboard </Link>
      <Link to ={`/add`}>-----Create new poll </Link>


      <div className="right menu">
        <a className="item">
          {state.users[state.authUser.userId].avatarURL ? (
            <img src={state.users[state.authUser.userId].avatarURL} />
          ) : (
            <i className="user circle icon"></i>
          )}
          Hi {state.users[state.authUser.userId].name}!
        </a>

        <a className="item">
          <i className="sign out alternate icon"></i>
          Logout{" "}
        </a>
      </div>
    </div>
  );
}

export default NavMenu;
