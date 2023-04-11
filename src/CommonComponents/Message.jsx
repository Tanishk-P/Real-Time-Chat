import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import ChatDate from "../CommonComponents/ChatDate";
import { Badge } from "antd";

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
          <Badge dot color="green" offset={[-4,32]} style={{ display: message.senderId === currentUser.uid ? 'none' : 'block'}}>
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
          </Badge>
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