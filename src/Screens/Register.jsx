import React from "react";

function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Live Chat</span>
            <span className="title">Register</span>
            <form>
                <input type={'text'} placeholder='Full Name'/>
                <input type={'email'} placeholder='Email address'/>
                <input type={'password'} placeholder='Password'/>
                <input type={'file'} />
                <button>Sign Up</button>
            </form>
            <p>Have an Account? Login</p>
        </div>
    </div>
  );
}

export default Register;
