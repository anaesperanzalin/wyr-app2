import React from "react";
import NavMenu from "./NavMenu";
import PollTeaser from "./PollTeaser";
import { useSelector } from "react-redux";

function Home() {
    const authedUser = useSelector(state=>state.authedUser)
    console.log(authedUser)
  return (
    <div>
      <header>This is Homepage</header>
      <NavMenu />

      <PollTeaser />
    </div>
  );
}

export default Home;
