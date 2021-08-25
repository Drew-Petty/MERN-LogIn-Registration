import React, {useState} from 'react'
import '../static/css/Navbar.css'
import LoggedIn from './LogggedIn'
import LogOut from './LogOut'
const Navbar = props =>{
    const [toggle,setToggle]=useState(false)

    const toggleHandler = e=>{
        setToggle(!toggle);
    }

    return(
        <div className="navbar">
            <div className="greeting">
                <LoggedIn/>
            </div>
            <a onClick={toggleHandler} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={toggle?'navbar-links active':'navbar-links'}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Profile</a></li>
                    <li>
                        <LogOut/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;