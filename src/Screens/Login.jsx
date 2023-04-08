import { Input, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../CommonComponents/Logo";
import { PageRoutes } from "../utls/PageRoutes";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    message.loading("Hang on, validating", [1]);

    if (validation) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        message.success("Hooray! Welcome back.", [3]);
        navigate(PageRoutes.home);
        // window.location.reload();
      } catch (error) {
        setError(true);
        message.error("Oops, Something went wrong", [2]);
      }
    }
  };

  const validation = () => {
    let validated = true;
    if (!email) {
      message.error("Invalid email.");
      validated = false;
    }
    // perform additional validation checks for email, if needed
    return validated;
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <Logo width={40} height={40} /> Live Chat
        </span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          {/* <input type={'text'} placeholder='Full Name'/> */}
          <Input
          className="email"
            type={"email"}
            placeholder="Email address"
            value={email}
            // style={{ width: '250px', padding: "10px"}}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input.Password
            // className="password"
            placeholder="Password"
            // type="password"
            value={password}
            style={{ padding: "10px", backgroundColor: "rgba(0, 0, 0, 0.4)", boxShadow: "0 0px 10px #202023", border: "1px solid #a7bcff" }}
            onChange={(e) => setPassword(e.target.value)}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined style={{color: "#a7bcff"}} />)}
          />
          <button>Sign In</button>
        </form>
        <p>
          Don't have an Account?{" "}
          <span onClick={() => navigate(PageRoutes.signup)}>Register!</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
