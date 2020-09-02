import React from "react"
import animals from "./images/avatars/animals.png"
import users from "../utils/DATA"
import {setAuthedUser} from "./actions/authedusers"
import {useDispatch, useSelector} from "react-redux";

function Login (){
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [userId, setId] = React.useState("")
    const dispatch= useDispatch()
    const setAuthedUser = useSelector(state => state.authedUser)


    function selectId(event) {
        event.preventDefault()
        setId(event.target.value)
    }

    function handleSubmit (event){
        event.preventDefault()
        setIsLoggedIn(true)
        dispatch({
            type: 'SET_AUTHED_USER', 
            payload: userId
        })
    }


    console.log(setAuthedUser);
    console.log(userId);
  console.log(isLoggedIn);
    return(
        <div className="ui-container">   
            <h1>Please sign in to continue</h1>
                <img src={animals} ></img>
                <form>
                <label >Please select a name:</label>
                <select onChange={(event) => selectId(event)}>
                    <option>-</option>
                    <option value="tylermcginnis">Tyler </option>
                    <option value="sarahedo">Sarah </option>
                    <option value="johndoe">John </option>
                    
                </select>
                <button onClick={handleSubmit} disabled={userId == ""} >
                    login
                </button>
                </form>
        

        </div>

    );
};



export default Login