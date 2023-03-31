import React from "react";
import Logo from "./Logo";
import { User } from "../UserDetails/UserAvatar";
import { MdLogout } from "react-icons/md";
import { PageRoutes } from "../utls/PageRoutes";
import { useNavigate } from "react-router-dom";
import { message, Popconfirm } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { UserDetails } from "../UserDetails/UsersDetails";

function Navbar() {
  const navigate = useNavigate();
  const userDetails = UserDetails();

  const confirm = () => {
    message.success("Logged out successfully. Visit Again!");
    navigate(PageRoutes.login);
    signOut(auth);
  };
  const cancel = () => {
    message.error("Great! Glad that you are with us.");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Logo /> Live Chat
      </span>
      <div className="user">
        <User />
        <span>{userDetails.name}</span>
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