import React, { useContext, useState } from "react";
import { Button, Input, message } from "antd";
import { Icons, Send } from "./ChatIcons";
import { ImAttachment } from "react-icons/im";
import { FaCamera } from "react-icons/fa";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";

function ChatInput() {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

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
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  file: downloadURL
                })
              })
            });
          }
        );

      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now()
          })
        })
      }

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"] : {
          text
        },
        [data.chatId + ".date"] : serverTimestamp(),
      });
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"] : {
          text
        },
        [data.chatId + ".date"] : serverTimestamp(),
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
        onPressEnter={() => handleSend()}
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
