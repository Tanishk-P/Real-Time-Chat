import React, { useState } from "react";
import { FcAddImage } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Logo from "../CommonComponents/Logo.jsx";
import { PageRoutes } from "../utls/PageRoutes.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Input, message } from "antd";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const date = new Date().getTime();
      const storageRef = ref(storage, `${name + date}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
          message.error("Oops, Something went wrong");
        },
        () => {
          message.loading("Hang on, in process", [2.5]);
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName: name,
              photoURL: downloadURL,
            });
            // console.log('File available at', downloadURL);
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", response.user.uid), {});
            message.success("Successfully created account. Have a nice time!")
            navigate(PageRoutes.home);
          });
        }
      );
    } catch (error) {
      setError(true);
      message.error("Something went wrong");
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <Logo width={48} height={48} /> Live Chat
        </span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            placeholder="User name"
            // style={{
            //   width: "300px",
            //   padding: "10px"
            // }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type={"email"}
            placeholder="Email address"
            // style={{
            //   width: "300px",
            //   padding: "10px"
            // }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          type="password"
            placeholder="Password"
            // style={{
            //   padding: "10px",
            //   color: "#a7bcff"
            // }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type={"file"}
            id="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file" style={{ cursor: "pointer" }}>
            <FcAddImage size={30} />
            <span>Add Profile Image.</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          Have an Account?{" "}
          <span onClick={() => navigate(PageRoutes.login)}>Login!</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
