import React from "react";
import { FcAddImage } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import Logo from "../CommonComponents/Logo.jsx";
import { PageRoutes } from "../utls/PageRoutes.js";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo"><Logo/> Live Chat</span>
            <span className="title">Register</span>
            <form>
                <input type={'text'} placeholder='Full Name'/>
                <input type={'email'} placeholder='Email address'/>
                <input type={'password'} placeholder='Password'/>
                <input type={'file'} id='file' hidden/>
                <label htmlFor="file" style={{cursor: 'pointer'}}>
                  <FcAddImage size={30} /> 
                  <span>Add Profile Image.</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Have an Account? <span onClick={() => navigate(PageRoutes.login)}>Login!</span></p>
        </div>
    </div>
  );
}

export default Register;
