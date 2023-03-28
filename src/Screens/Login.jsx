import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../CommonComponents/Logo';
import { PageRoutes } from '../utls/PageRoutes';

function Login() {
  const navigate = useNavigate();

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
            <p>Don't have an Account? <span onClick={() => navigate(PageRoutes.signup)}>Register!</span></p>
            
        </div>
    </div>
  )
}

export default Login;