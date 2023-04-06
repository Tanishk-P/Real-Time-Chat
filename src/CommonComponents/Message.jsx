import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import ChatDate from "../CommonComponents/ChatDate";

function Message({message}) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
        <div className="messageInfo">
          <img
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            height={36} width={36}
            style={{ borderRadius: '20px', objectFit: 'cover', display: message.senderId === currentUser.uid ? 'none' : 'block'}}
            alt=""
          />
        </div>
        <div className="messageContent">
          <span><p>{message.text}</p>
          <small><ChatDate date={message.date} /></small>
          </span>
          {message.file && <img src={message.file} alt="" />}
        </div>
      </div>
    </>
  );
}

export default Message;