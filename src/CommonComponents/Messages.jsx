import React from 'react'
import Message from './Message'
import { useState } from 'react'
import { useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatDetails } from '../ChatDetails/ChatDetails';

function Messages() {
  const [messages, setMessages] = useState([]);
  const chatDetails = ChatDetails();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", chatDetails.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unsub();
    }
  },[chatDetails.chatId]);

  console.log(messages);

  return (
    <div className='messages'>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  )
}

export default Messages