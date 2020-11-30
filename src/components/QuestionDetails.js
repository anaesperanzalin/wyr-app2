import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RECEIVE_ANSWER } from "./actions/shared";
import NavMenu from "./NavMenu";
import { saveAnswer } from "./actions/shared";

function QuestionDetails({
  authedUser,
  authUserId,
  username,
  optionOne,
  optionTwo,
  questionId,
  optionOneVotes,
  optionTwoVotes,
  totalVotes,
  answer,
}) {
  const state = useSelector((state) => state);
  console.log("state");
  console.log(state);
  const [answered, setAnswered] = React.useState(false)
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const answerQuestion = (event) => {
    event.preventDefault();
    setAnswered(true);
    const answerId = value;

    dispatch(saveAnswer({ authedUser, questionId, answerId }));
  };

  // }

  const optionOnePercent = () => {
    return (optionOneVotes / totalVotes) * 100;
  };
  const optionTwoPercent = () => {
    return (optionTwoVotes / totalVotes) * 100;
  };

  // };

  return (
    <div>
      <div>
        <NavMenu />

        {!answered ? (
          <div>
            <img
              src={state.users[state.questions[questionId].author].avatarURL}
            />

            <form className="detail-form" onSubmit={answerQuestion}>
              <h2> {username} asks...</h2>
              <p>Would you rather... </p>
              <input
                name="answer"
                type="radio"
                id="optionOne"
                value="optionOne"
                onChange={handleChange}
              />
              <span> {optionOne}</span>

              <input
                name="answer"
                type="radio"
                id="optionTwo"
                value="optionTwo"
                onChange={handleChange}
              />
              <span> {optionTwo}</span>

              <br />
              <br />
              <button className="btn" type="submit">
                Submit{" "}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <p>Results</p>

            <h2> {optionOne}</h2>
            <h2>
              {"optionOne" === answer && (
                <div className="voted"> Your vote</div>
              )}
              {optionOneVotes} out of {totalVotes} voted this
            </h2>
            <h2>That's {optionOnePercent().toString().slice(0, 5)}% </h2>
            <br />
            <br />
            <br />
            {"optionTwo" === answer && <div className="voted"> Your vote</div>}
            <h2> {optionTwo}</h2>
            <h2>
              {" "}
              {optionTwoVotes} out of {totalVotes} voted this
            </h2>
            <h2>That's {optionTwoPercent().toString().slice(0, 5)} % </h2>
          </div>
        )}
      </div>
    </div>
  );
}
{
  /*       
        
        <h2> {username} asks:</h2>
      </div>
      <div>
        <div>
          <h2>Would you rather </h2>
          <h2>
            <button onClick={event => handleClick(event)} value="optionOne">
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
} */
}

function mapStateToProps(state, { id }) {
  // console.log('state')
  // console.log(state)

  const user = state.users[state.questions[id].author];
  const authUser = state.authUser.userId;
  const question = state.questions[id];

  // console.log('authuser')
  // console.log(authUser)
  // console.log('question')
  // console.log(question)

  return {
    username: user.name,
    questionId: id,
    avatarURL: user.avatarURL,
    optionOne: state.questions[id].optionOne.text,
    optionTwo: state.questions[id].optionTwo.text,
    authedUser: state.authUser.userId,
    optionOneVotes: state.questions[id].optionOne.votes.length,
    optionTwoVotes: state.questions[id].optionTwo.votes.length,
    totalVotes:
      state.questions[id].optionOne.votes.length +
      state.questions[id].optionTwo.votes.length,
    answerId: state.users[authUser].answers[question.id],
  };
}

export default connect(mapStateToProps)(QuestionDetails);
