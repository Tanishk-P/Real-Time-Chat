import React, { useState } from "react";
import { Button, Input, message } from "antd";
import { Icons, Send } from "./ChatIcons";
import { ImAttachment } from "react-icons/im";
import { FaCamera } from "react-icons/fa";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ChatDetails } from "../ChatDetails/ChatDetails";
import { v4 as uuid } from "uuid";
import { UserDetails } from "../UserDetails/UsersDetails";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function ChatInput() {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const chatDetails = ChatDetails();
  const userDetails = UserDetails();

  const handleSend = async () => {
      if (file){
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            setError(true);
            message.error('Oops, Something went wrong');
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await updateDoc(doc(db, "chats", chatDetails.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: userDetails.uid,
                  date: Timestamp.now(),
                  file: downloadURL
                })
              })
            });
          }
        );

      } else {
        await updateDoc(doc(db, "chats", chatDetails.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: userDetails.uid,
            date: Timestamp.now()
          })
        })
      }

      await updateDoc(doc(db, "userChats", userDetails.uid), {
        [chatDetails.chatId + ".lastMessage"] : {
          text
        },
        [chatDetails.chatId + ".date"] : serverTimestamp(),
      });
      await updateDoc(doc(db, "userChats", chatDetails.uid), {
        [chatDetails.chatId + ".lastMessage"] : {
          text
        },
        [chatDetails.chatId + ".date"] : serverTimestamp(),
      });
      setText('');
      setFile(null);
  }

  const handleFile = () => {
    document.querySelector('input[type="file"]').click();
  }

  return (
    <div className="input">
      <Input
        width={70}
        style={{ borderRadius: "20px" }}
        placeholder="Message"
        onChange={(event) => setText(event.target.value)}
        value={text}
        prefix={<Icons />}
        suffix={
          <>
            <ImAttachment size={15} htmlFor="file" onClick={() => handleFile()} /> <FaCamera size={15} />
            <input type="file" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
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
