import React, { useContext, useState } from "react";
import Camera, { AddFriend, More } from "./ChatIcons";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { FemaleUser, NoUser } from "../UserDetails/UserAvatar";
import ChatUserIcon from "../ChatDetails/ChatUserIcon";
import { ChatContext } from "../Context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);
  

  return (
    <div className="chat">
      {data?.user?.uid ? (
        <>
          <div className="chatInfo">
          <span>
          { data?.user?.photoURL ? <ChatUserIcon /> : <NoUser />} {data?.user?.displayName}
          </span>
          <div className="chatIcons">
            <Camera />
            <AddFriend />
            <More />
          </div>
        </div>
        <Messages />
        <ChatInput />
        </>
      ) : (
        <div className="displayBlank" style={{ display: data?.user?.uid ? 'none' : 'flex'}}>
          <label>Click any user to Start chatting!</label>
        </div>
      )}      
    </div>
  );
}

export default Chat;