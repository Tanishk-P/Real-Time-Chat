import React from 'react'
import Logo from '../CommonComponents/Logo';

function Login() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo"><Logo/> Live Chat</span>
            <span className="title">Login</span>
            <form>
                {/* <input type={'text'} placeholder='Full Name'/> */}
                <input type={'email'} placeholder='Email address'/>
                <input type={'password'} placeholder='Password'/>
                <button>Sign In</button>
            </form>
            <p>Don't have an Account? Register</p>
        </div>
    </div>
  )
}

export default Login;