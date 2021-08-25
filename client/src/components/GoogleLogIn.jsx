import { navigate } from '@reach/router'
import axios from 'axios';
import React from 'react'
import { GoogleLogin } from 'react-google-login';
import '../static/css/Welcome.css'

const clientId = "871843224583-78n4pc3808do7une5jrf94bmhef4385q.apps.googleusercontent.com"

const GoogleLoginComponent = props =>{

    const responseGoogle = async (response)=>{
        const form = {
            email: response.Os.zt,
            name: response.Os.Ne,
        }
        axios.post("http://localhost:8000/api/googleLogIn", form, {withCredentials:true})
        .then(res=>{
            navigate("/home")
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <GoogleLogin
        onFailure={responseGoogle}
        onSuccess={responseGoogle}
        clientId={clientId}
        />
    )
}
export default GoogleLoginComponent;