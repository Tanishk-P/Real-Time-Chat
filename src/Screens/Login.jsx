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
          <Logo width={48} height={48} /> Live Chat
        </span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          {/* <input type={'text'} placeholder='Full Name'/> */}
          <input
            type={"email"}
            placeholder="Email address"
            value={email}
            // style={{ width: '300px', padding: "10px"}}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            // style={{ padding: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
            // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
