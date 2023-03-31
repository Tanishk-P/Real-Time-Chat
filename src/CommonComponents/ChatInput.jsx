import React from "react";
import { Button, Input } from "antd";
import { Icons, Send } from "./ChatIcons";
import { ImAttachment } from "react-icons/im";
import { FaCamera } from "react-icons/fa";

function ChatInput() {
  return (
    <div className="input">
      <Input
        width={70}
        style={{ borderRadius: "20px" }}
        placeholder="Message"
        prefix={<Icons />}
        suffix={
          <>
            <ImAttachment size={15} /> <FaCamera size={15} />{" "}
          </>
        }
      />
      <Button
        type="text"
        style={{ backgroundColor: "transparent" }}
        shape={"circle"}
        icon={<Send />}
      />
    </div>
  );
}

export default ChatInput;
