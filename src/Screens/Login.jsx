import { message } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../CommonComponents/Logo';
import { PageRoutes } from '../utls/PageRoutes';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(PageRoutes.home)
    } catch (error) {
      setError(true);
      message.error('Something went wrong');
    }
  }

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo"><Logo/> Live Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit} >
                {/* <input type={'text'} placeholder='Full Name'/> */}
                <input type={'email'} placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type={'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Sign In</button>
            </form>
            <p>Don't have an Account? <span onClick={() => navigate(PageRoutes.signup)}>Register!</span></p>
        </div>
    </div>
  )
}

export default Login;