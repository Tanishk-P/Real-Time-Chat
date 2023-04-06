import React, { useContext } from 'react'
import Message from './Message'
import { useState } from 'react'
import { useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatContext } from '../Context/ChatContext';
import { AuthContext } from '../Context/AuthContext';

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser.uid) {
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
      return () => {
        unsub();
      }
    }
  },[data.chatId]);

  // console.log(messages);

  return (
    <div className='messages'>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  )
}

export default Messages