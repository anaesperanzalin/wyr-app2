import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function QuestionDetails({username, optionOne, optionTwo, questionId }) {
    console.log('questionId');
    console.log(questionId);
    return (<div>
        <div>
            <span> {username} asks:</span>
        </div>
        <div>
            <div>
                <div>Would you rather {optionOne} or...{optionTwo}?</div>
               
            </div>
        </div>
    </div>);

}

function mapStateToProps(state, { id }) {
    const user = state.users[state.questions[id]];
    console.log('id')
    console.log(id)
    return {
        username: user.name,
        questionId: id,
        optionOne: state.questions[id].optionOne.text,
        optionTwo: state.questions[id].optionTwo.text
    }
}

export default connect(mapStateToProps)(QuestionDetails);