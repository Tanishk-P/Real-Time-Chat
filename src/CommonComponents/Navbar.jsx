import React, { useContext } from "react";
import Logo from "./Logo";
import { User } from "./UserAvatar";
import { MdLogout } from "react-icons/md";
import { PageRoutes } from "../utls/PageRoutes";
import { useNavigate } from "react-router-dom";
import { message, Popconfirm } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const confirm = () => {
    message.success("Logged out successfully. Visit Again!");
    navigate(PageRoutes.login);
    signOut(auth);
  };
  const cancel = () => {
    message.error("Great! Glad that you are with us.");
  };

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">
        <Logo /> Live Chat
      </span>
      <div className="user">
        <User />
        <span>{currentUser.displayName}</span>
        <Popconfirm
          title="Logout"
          description="Logging out so soon?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
          placement="bottomRight"
        >
          <button>
            <MdLogout size={20} />
          </button>
        </Popconfirm>
      </div>
    </div>
  );
}

export default Navbar;