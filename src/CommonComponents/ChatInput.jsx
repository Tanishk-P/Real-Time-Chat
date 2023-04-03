import React, { useState } from "react";
import { Button, Input } from "antd";
import { Icons, Send } from "./ChatIcons";
import { ImAttachment } from "react-icons/im";
import { FaCamera } from "react-icons/fa";

function ChatInput() {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleSend = () => {
      
  }


  return (
    <div className="input">
      <Input
        width={70}
        style={{ borderRadius: "20px" }}
        placeholder="Message"
        onChange={(event) => setText(event.target.value)}
        prefix={<Icons />}
        suffix={
          <>
            <ImAttachment size={15} /> <FaCamera size={15} />
          </>
        }
      />
      <Button
        type="text"
        style={{ backgroundColor: "transparent" }}
        shape={"circle"}
        icon={<Send />}
        onClick={() => handleSend()}
      />
    </div>
  );
}

export default ChatInput;
