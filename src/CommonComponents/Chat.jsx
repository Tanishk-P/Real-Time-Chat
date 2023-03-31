import React from "react";
import Camera, { AddFriend, More } from "./ChatIcons";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { FemaleUser } from "./UserAvatar";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>
          <FemaleUser /> Chari
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