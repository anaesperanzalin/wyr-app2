import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question({username, optionOne, questionId }) {
    // console.log('questionId');
    // console.log(questionId);
    return (<div>
        <div>
            <span> {username} asks:</span>
        </div>
        <div>
            <div>
                <div>Would you rather {optionOne} or...?</div>
                <Link className="btn" to={`/question/${questionId}`}>View this poll</Link>
                


            </div>
        </div>
    </div>);

}

function mapStateToProps(state, { id }) {
    const user = state.users[state.questions[id].author];
    // console.log('id')
    // console.log(id)
    return {
        username: user.name,
        questionId: id,
        optionOne: state.questions[id].optionOne.text
    }
}

export default connect(mapStateToProps)(Question);