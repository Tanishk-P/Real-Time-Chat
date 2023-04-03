import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { UserDetails } from '../UserDetails/UsersDetails';
import { ChatContext } from '../Context/ChatContext';

function Chats() {
  const [chats, setChats] = useState([]);
  const userDetails = UserDetails();
  const { dispatch } = useContext(ChatContext);

  useEffect(()=>{
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", userDetails.uid), (doc) => {
        setChats(doc.data());
        });
      return () => {
        unsub();
      }
    }
    userDetails.uid && getChats();
  },[userDetails.uid]);

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload: u})
  }

  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) => (
        <div className='userProfile' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} alt='profile' height={32} width={32} style={{objectFit: 'cover', borderRadius: '20px'}} />
          <div className='userChatInfo'>
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
      </div>
      ))}
      
    </div>
  )
}

export default Chats