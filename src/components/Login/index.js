import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Login = () => {
    return(
        <div className='login__page'>
            <div className='login__page-modal'>
                LOGIN PAGE
                <form>
                    <input></input>
                    <input></input>
                    <button type='button'>LOGIN</button>
                    <button type='button'><Link to="/">Cancel</Link></button>
                    <div><Link to="/registration">Not registered yet?</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Login;