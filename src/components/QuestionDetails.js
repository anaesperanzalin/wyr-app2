import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RECEIVE_ANSWER } from "./actions/shared";
import NavMenu from "./NavMenu";
import {saveAnswer} from "./actions/shared"


function QuestionDetails({
  authedUser,
  authUserId,
  username,
  optionOne,
  optionTwo,
  qid,
  optionOneVotes,
  optionTwoVotes,
  totalVotes,
  answer,
}) {
  const state = useSelector((state) => state);
  
  
  const dispatch = useDispatch()

  const [value, setValue] = React.useState('')
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const answerQuestion = (event) => {
    event.preventDefault();
    // console.log('authUser')
    // console.log(authUser)
    // console.log('questionId')
    // console.log(questionId)
    // console.log('value')
    // console.log(value)

  dispatch(saveAnswer({authedUser, qid, value}))
    
    
  }


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
        
      {!answer?
        <div> 
          
          
          <img src= {state.users[state.questions[qid].author].avatarURL}/>
                    
          
          <form className="detail-form"
          onSubmit= {answerQuestion}>
            <h2> {username} asks...</h2>
            <p>Would you rather... </p>
            <input 
              name="answer"
              type= "radio"
              id="optionOne"
              value= "optionOne"
              onChange={handleChange}
            />
            <span>   {optionOne}</span>

            <input
              name="answer"
              type="radio"
              id="optionTwo"
              value="optionTwo"
              onChange={handleChange}
            
          
            />
            <span>   {optionTwo}</span>

            <br/>
            <br/>
            <button 
              className="btn"
              type= "submit"
            >Submit </button>



          </form>


          </div>:
          <div>
            <p>Results</p>

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


          </div>




      }
      </div>
      </div> ) }
{/*       
        
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
} */}

function mapStateToProps(state, {id}) {
  // console.log('state')
  // console.log(state)
  
  const user = state.users[state.questions[id].author];
  const authUser= state.users[state.authUser]
  const question = state.questions[id];



  return {
    username: user.name,
    qid: id,
    avatarURL: user.avatarURL,
    optionOne: state.questions[id].optionOne.text,
    optionTwo: state.questions[id].optionTwo.text,
    authedUser: state.authUser.userId,
    // optionOneVotes: state.questions[id].optionOne.votes.length,
    // optionTwoVotes: state.questions[id].optionTwo.votes.length,
    // totalVotes:state.questions[id].optionOne.votes.length + state.questions[id].optionTwo.votes.length,
    //answer: state.authUser.answers[question.id]
    //answer: state.authUser.answers[question.id]
  };
}

export default connect(mapStateToProps)(QuestionDetails);
