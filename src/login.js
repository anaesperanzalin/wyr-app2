import React from "react"
import animals from "./components/images/avatars/animals.png"


function Login (){
    const [isLoggedIn, setIsLoggedIn]= React.useState(false)
    function handleSubmit (){
        setIsLoggedIn(true)
    }
    console.log(isLoggedIn)
    return(
        <div className="ui-container">   
            <h1>Please sign in to continue</h1>
                <img src={animals} ></img>
                <select>
                    <option value="Tyler">Tyler </option>
                    <option value="Sarah">Sarah </option>
                    <option value="John">John </option>

                </select>

                <button onClick={handleSubmit}>
                    login
                </button>

        </div>

    );
};

export default Login

