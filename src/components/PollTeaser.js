import React, {useState} from 'react';
import {connect, useSelector} from 'react-redux';
import Question from './question';

function PollTeaser({answered, unanswered}){
  const [isAnswered, setIsAnswered] =useState(false);

  const setToAnswered =() => {
      setIsAnswered(true);
  }

    const setToUnAnswered =()=>{
      setIsAnswered(false);
    }
    const state = useSelector(state => state);
    // console.log('answered')
    // console.log(answered)
    // console.log('unanswered')
    // console.log(unanswered)
    
  return(
      <div>

        <div>
          <a className={!isAnswered?"btn active ": "btn" }
          onClick={setToUnAnswered}>Unanswered Questions</a>

          <a className= {isAnswered?"btn active": "btn"}
          onClick={setToAnswered}>Answered Questions</a>

        </div>

        <ul className="questions">
            {isAnswered && answered.map(id=> (
              <li key={id}>
                  <Question 
                  key={id} 
                  id={id}/>
                  <br/>
                  <br/>

              </li>
              ))
              
            }

            {!isAnswered && unanswered.map(id=>
              <li key={id}>  
                <Question
                key={id}
                id={id}
                >
                </Question>
                <br/>
                <br/>
              </li>

            )}


        </ul>


      </div>



  );


}

function mapStateToProps(state) {
  // console.log(state.users)
  const user = state.users[state.authUser.userId];

  const answered = [...Object.keys(user.answers)]
      .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);
  const unanswered = [...Object.keys(state.questions)
      .filter(question => answered.indexOf(question) < 0)]
      .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);

  return {
      answered: answered,
      unanswered: unanswered
  }
}



// export default PollTeaser;
export default connect(mapStateToProps)(PollTeaser);