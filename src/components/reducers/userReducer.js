import { RECEIVE_USERS } from "../actions/users";
import { RECEIVE_ANSWER } from "../actions/shared";
import { RECEIVE_QUESTION } from "../actions/shared";

export function userReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      //console.log("action receive users");
      //console.log(action);

      return action.users;

    case RECEIVE_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id,
          ],
        },
      };

    case RECEIVE_ANSWER:
      //console.log('state');
      //console.log(state)
      // console.log('action receive answers');
      // console.log(action)
      // console.log('action .username ');
      // console.log(action.username);
      // console.log('action .username answers ');
      // console.log([action.username].answers)
      // console.log('action .username answers ');
      // console.log([action.questionId])
      // console.log('action.option')z
      // console.log(action.answer)

      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          answers: {
            ...state[action.username].answers,
            [action.questionId]: action.answer,
          },
        },
      };

    default:
      return state;
  }
}
