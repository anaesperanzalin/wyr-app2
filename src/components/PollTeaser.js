import React from "react";
import { Tab } from "semantic-ui-react";
import Question from "./question";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


function PollTeaser({answered, unanswered}) {
  const [isAnswered, setIsanswered]= React.useState(false);
  
  const setToAnswered=()=>{
    setIsanswered(true);
    console.log("it is setting to answered woohoo")
  }

  const setToUnanswered=()=>{
    setIsanswered(false);
    console.log("it is setting to unanswered woohoo")
  }
  
  const users = useSelector(state=>state.userReducer)
  console.log(users)
  const questions= useSelector(state=> state.questionReducer)
  console.log(questions)


  return( 
    <div>
        <div>
          <button
          onClick={setToUnanswered}>
          Unanswered.... </button>

          <button
          onClick={setToAnswered}
          >Answered...... </button>


        </div>
        <div>
        <Question/>

        </div>
        




        </div>



    )
  };




export default (PollTeaser);
