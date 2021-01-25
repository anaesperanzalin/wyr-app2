import React from "react"
import animals from "./images/avatars/animals.png"
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"


function Login (){
   
    const [userId, setId] = React.useState("")
    const dispatch= useDispatch()
    
    const history= useHistory();

    function selectId(event) {
        event.preventDefault()
        setId(event.target.value)
    }



    function handleSubmit (event){
        event.preventDefault()
        
        if (history.location.pathname.match("/home") || history.location.pathname === '/') {
            history.push("/home");
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
                <img src={animals} alt="" ></img>
                <form>
                <label >Please select a name:</label>
                <select onChange={(event) => selectId(event)}>
                    <option>-</option>
                    <option value="tylermcginnis">Tyler </option>
                    <option value="sarahedo">Sarah </option>
                    <option value="johndoe">John </option>
                    <option value="analin">Ana </option>
                    
                    
                </select>
                <button onClick={handleSubmit} disabled={userId === ""}> 
                    login
                </button>
                </form>
        

        </div>

    );
};



export default Login