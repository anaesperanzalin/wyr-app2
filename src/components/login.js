import React from "react"
import animals from "./images/avatars/animals.png"
import users from "../utils/DATA"
import {setAuthedUser} from "./actions/authedusers"
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom"


function Login (){
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [userId, setId] = React.useState("")
    const dispatch= useDispatch()
    const setAuthedUser = useSelector(state => state.authedUser)
    const history= useHistory();

    function selectId(event) {
        event.preventDefault()
        setId(event.target.value)
    }



    function handleSubmit (event){
        event.preventDefault()
        setIsLoggedIn(true)
        if (history.location.pathname.match("/home")){
            history.push("/home");
        } else {
            history.push('/404');
        }
        dispatch({
            type: 'SET_AUTHED_USER', 
            payload: userId
        })
    }

    console.log('history.location.pathname', history.location.pathname);
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
                    <option value="analin">Ana </option>
                    
                    
                </select>
                <button onClick={handleSubmit} disabled={userId == ""}> 
                    login
                </button>
                </form>
        

        </div>

    );
};



export default Login