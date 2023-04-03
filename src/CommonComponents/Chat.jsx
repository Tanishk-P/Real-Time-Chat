import React from "react";
import Camera, { AddFriend, More } from "./ChatIcons";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { FemaleUser, NoUser } from "../UserDetails/UserAvatar";
import { ChatDetails } from "../ChatDetails/ChatDetails";
import ChatUserIcon from "../ChatDetails/ChatUserIcon";

function Chat() {
  const chatDetails = ChatDetails();

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>
         { chatDetails?.photoURL ? <ChatUserIcon /> : <NoUser />} {chatDetails?.name}
        </span>
        <div className="chatIcons">
          <Camera />
          <AddFriend />
          <More />
        </div>
      </div>
      <Messages />
      <ChatInput />
    </div>
  );
}

export default Chat;