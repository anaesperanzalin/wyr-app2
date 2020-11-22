import React from "react";
import NavMenu from "./NavMenu";
import PollTeaser from "./PollTeaser";
import { useSelector, useDispatch } from "react-redux";
import { getInitialData } from "./actions/shared";
import { Question } from "./question";

function Home() {
  const authUser = useSelector((state) => state.authUser);
  const state = useSelector((state) => state);

  console.log("state");
  console.log(state);

  return (
    <div>
      <NavMenu />

      <PollTeaser />
    </div>
  );
}

export default Home;
