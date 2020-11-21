import React from "react";
import { icon } from "semantic-ui-react";
import {useSelector} from "react-redux"


function NavMenu(){
  const authUser = useSelector(state=>state.authUser)
  // console.log(authUser)

    return (
      <div className="ui secondary pointing menu">
        <a className="item">Home </a>
        <a className="item">Leaderboard </a>
        <a className="item">Create new poll </a>
        <div className="right menu">
          <a className="item">
            <i className="user circle icon"></i>
            hi {authUser.userId}   
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