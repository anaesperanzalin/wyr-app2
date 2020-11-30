import {RECEIVE_USERS, ADD_QUESTION_TO_USER} from "../actions/users"

export function userReducer (state={}, action){
    switch(action.type){
        case RECEIVE_USERS : return {
            ...state,
            ...action.users
        };
        default: 
            return state


    
        };
        
    } 

