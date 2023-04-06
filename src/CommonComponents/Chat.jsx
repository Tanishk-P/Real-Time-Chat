import React, { useContext, useState } from "react";
import Camera, { AddFriend, More } from "./ChatIcons";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { FemaleUser, NoUser } from "../UserDetails/UserAvatar";
import ChatUserIcon from "../ChatDetails/ChatUserIcon";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";

function Chat() {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const combinedId = currentUser.uid > data?.user?.uid ? currentUser.uid + data?.user?.uid : data?.user?.uid + currentUser.uid;
  
  return (
    <div className="chat">
      {combinedId === data.chatId ? (
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
        <div className="displayBlank">
          <label>Click any user to Start chatting!</label>
        </div>
      )}      
    </div>
  );
}

export default Chat;