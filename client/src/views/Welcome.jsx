import React from 'react'
import '../static/css/Welcome.css'
import Registration from '../components/Registration'
import LogIn from '../components/LogIn'
import GoogleLogin from '../components/GoogleLogIn'

const Welcome = props =>{
    return(
        <div className="welcome">
            <Registration/>
            <div className="column">
                <LogIn/>
                <GoogleLogin/>
            </div>
        </div>
    )
}
export default Welcome;