import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import '../static/css/Welcome.css'


const Registration = props =>{
    
    const [myForm, setmyForm] = useState({})
    const [errors, setErrors] = useState({})

    const onSubmitHandler = e =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", myForm, {withCredentials:true})
        .then(res=>{
            if(res.data.errors){
                setErrors(res.data.errors)
            }else{
                navigate("/home")
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const onChangeHandler = e =>{
        setmyForm({...myForm,[e.target.name]:e.target.value})
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <legend>Register</legend>
                {errors.name?<p className="error">{errors.name.message}</p>:""}
                <p className="formRow">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" name="name" onChange={onChangeHandler}/>
                </p>
                {errors.email?<p className="error">{errors.email.message}</p>:""}
                <p className="formRow">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={onChangeHandler}/>
                </p>
                {errors.password?<p className="error">{errors.password.message}</p>:""}
                <p className="formRow">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={onChangeHandler}/>
                </p>
                {errors.confirm?<p className="error">{errors.confirm.message}</p>:""}
                <p className="formRow">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input type="password" name="confirm" onChange={onChangeHandler}/>
                </p>
                <input type="submit" value="Register"/>
            </fieldset>

        </form>
    )
}
export default Registration;