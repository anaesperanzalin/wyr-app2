import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../../utils/DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const GET_INITIAL_DATA = "GET_INITIAL_DATA";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function getInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      }
    );
  };
}

export function saveAnswer({ authedUser, questionId, answerId }) {
  
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestionAnswer(authedUser, questionId, answerId).then((answer) => {
      dispatch(receiveAnswer(authedUser, questionId, answerId));
      dispatch(hideLoading());
    });
  };
}

export function saveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestion({ optionOneText, optionTwoText, author }).then((question) => {
      dispatch(receiveQuestion(question));
      dispatch(hideLoading());
    });
  };
}

export function receiveAnswer(username, questionId, answer) {
  return {
    type: RECEIVE_ANSWER,
    username,
    questionId,
    answer,
  };
}

export function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTION,
    question,
  };
}
