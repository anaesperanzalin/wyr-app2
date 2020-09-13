import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question({username, optionOne }) {
    return (<div>
        <div>
            <span> {username} asks:</span>
        </div>
        <div>
            <div>
                <div>Would you rather {optionOne}?</div>
                <button>Answer this poll</button>
            </div>
        </div>
    </div>);

}

function mapStateToProps(state,{id}){
    const user= state.users[state.questions[id].author]
    return{
        username: user.name,
        questionId: id, 
        optionOne: state.questions[id].optionOne.text

    }
}



export default Question;