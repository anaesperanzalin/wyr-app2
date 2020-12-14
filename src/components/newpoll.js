import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {saveQuestion} from "./actions/shared"
import Home from "./home"
import {connect} from "react-redux"
import NavMenu from "./NavMenu"
import { Redirect } from 'react-router-dom'


function NewPoll (authedUser){
    const state = useSelector((state) => state)
    const [optionOneText, setOptionOneText] = React.useState("")
    const [optionTwoText, setOptionTwoText] = React.useState("")
    const [toHome, setHome]= React.useState(false)
    
    const handleOptionOneChange = (event) => {
        setOptionOneText(event.target.value)
    }
    
    const handleOptionTwoChange= (event)=> {
        setOptionTwoText(event.target.value)
    }   

    const dispatch= useDispatch();

    const addQuestion = (event) =>{
        event.preventDefault();
        console.log('optionOnetext and two')
        console.log(optionOneText);
        console.log(optionTwoText);
        console.log('authedUser ID')
        console.log(authedUser.authedUser.userId)
        dispatch(saveQuestion(optionOneText, optionTwoText, authedUser.authedUser.userId))
        
        setOptionOneText("")
        setOptionTwoText("")
        setHome(true)

    }

    if (toHome === true) {
        return <Redirect to='/home' />
    }


    console.log("state")
    console.log(state)
    


    return(
        <div> 
            <NavMenu/>
        
            <h1>Create your own poll!</h1>
            <h1>Would you rather... </h1>
            
            <form onSubmit = {addQuestion}>
            <p> Enter your option 1</p>
            <input type= "text"
            onChange = {handleOptionOneChange}
            />
            <h1> or </h1>
            <p> Enter your option 2 </p>
            <input type= "text"
            onChange= {handleOptionTwoChange}
            />
            <br/>
            <br/>
            <button onClick= {addQuestion}> Submit </button>
            </form>
        </div>

    )



}

function mapStateToProps(state) {
    return {
        authedUser: state.authUser



    }
}


export default connect(mapStateToProps)(NewPoll)