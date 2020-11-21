import React from "react";
import NavMenu from "./NavMenu";
import PollTeaser from "./PollTeaser";
import { useSelector, useDispatch } from "react-redux";
import {getInitialData} from "./actions/shared"
import {Question} from "./question"

function Home() {
    const authedUser = useSelector(state=>state.authedUser)
    // console.log(authedUser)
    
  
  return (
    <div>
      <header>This is Homepage</header>
      

      <NavMenu />
      
      <PollTeaser />
    </div>
  );
}

export default Home;
