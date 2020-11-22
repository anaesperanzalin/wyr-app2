import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RECEIVE_ANSWER } from "./actions/shared";
import NavMenu from "./NavMenu";
import {saveAnswer} from "./actions/shared"

function QuestionDetails({
  authedUser,
  username,
  optionOne,
  optionTwo,
  questionId,
  optionOneVotes,
  optionTwoVotes,
  totalVotes,
  answer
}) {

  const answerQuestion =(event)=> {
    event.preventDefault();
    console.log('authedUser')
    console.log(authedUser)
    console.log('questionId')
    console.log(questionId)

    dispatch(saveAnswer(authedUser, questionId, answer))
  }
  

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [hasUserVoted, sethasUserVoted] = React.useState(false);
  const optionOnePercent = () => {
    return (optionOneVotes / totalVotes) * 100;
  };
  const optionTwoPercent = () => {
    return (optionTwoVotes / totalVotes) * 100;
  };

  const handleClick = (event) => {
    sethasUserVoted(true);
    answerQuestion(event);
    dispatch({
      type: RECEIVE_ANSWER,
      username: authedUser,
      questionId,
      answer: event.target.value,
    });


  

  };


  return (
    <div>
      <div>
        <NavMenu />

        <img src= {state.users[state.questions[questionId].author].avatarURL}/>
        <h2> {username} asks:</h2>
      </div>
      <div>
        <div>
          <h2>Would you rather </h2>
          <h2>
            <button onClick={handleClick} value="optionOne">
              {optionOne}
            </button>
          </h2>
          <h2> or </h2>
          <h2>
            <button onClick={handleClick} value="optionTwo">
              {optionTwo}
            </button>
          </h2>
        </div>
        <div>
          <br />
          <br />

          {hasUserVoted && (
            <React.Fragment>
              <h3>RESULTS</h3>
              <h2> {optionOne}</h2>
              <h2>
                {" "}
                {optionOneVotes} out of {totalVotes} voted this
              </h2>
              <h2>That's {optionOnePercent().toString().slice(0, 5)}% </h2>
              <br />
              <br />
              <br />
              <h2> {optionTwo}</h2>
              <h2>
                {" "}
                {optionTwoVotes} out of {totalVotes} voted this
              </h2>
              <h2>
                That's {optionTwoPercent().toString().slice(0, 5)} %{" "}
              </h2>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, { id }) {

  const user = state.users[state.questions[id].author];
  return {
    username: user.name,
    questionId: id,
    avatarURL: user.avatarURL,
    optionOne: state.questions[id].optionOne.text,
    optionTwo: state.questions[id].optionTwo.text,
    authedUser: state.authUser.userId,
    optionOneVotes: state.questions[id].optionOne.votes.length,
    optionTwoVotes: state.questions[id].optionTwo.votes.length,
    totalVotes:state.questions[id].optionOne.votes.length + state.questions[id].optionTwo.votes.length,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
