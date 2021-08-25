import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import '../static/css/Welcome.css'
const LogIn = props =>{
    const [myForm, setMyForm] = useState({})
    const [errors, setErrors] = useState({})

    const onChangeHandler = e =>{
        setMyForm({...myForm,[e.target.name]:e.target.value})
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/login",myForm,{withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data.message!= "success"){
                setErrors(res.data)
            }else{
                navigate("/home")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <legend>Log In</legend>
                {errors.message?<p className="error">{errors.message}</p>:""}
                <p className="formRow">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={onChangeHandler}/>
                </p>
                {errors.password?<p className="error">{errors.password.message}</p>:""}
                <p className="formRow">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={onChangeHandler}/>
                </p>
                <input type="submit" value="Log in"/>
            </fieldset>

        </form>
    )
}
export default LogIn;