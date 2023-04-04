import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatContext } from '../Context/ChatContext';
import { AuthContext } from '../Context/AuthContext';
import { NoUser } from '../UserDetails/UserAvatar';

function Chats() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(()=>{
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
        });
      return () => {
        unsub();
      }
    }
    currentUser?.uid && getChats();
  },[currentUser?.uid]);

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload: u});
  }

  // console.log(Object.entries(chats))

  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <div className='userProfile' key={chat[0]} onClick={() => handleSelect(chat[1]?.userInfo)}>
          {chat[1]?.userInfo ? <img src={chat[1]?.userInfo?.photoURL} alt='profile' height={32} width={32} style={{objectFit: 'cover', borderRadius: '20px'}} /> : <NoUser />}
          <div className='userChatInfo'>
            {chat[1]?.userInfo ? <span>{chat[1]?.userInfo?.displayName}</span> : <span>Unknown User</span>}
            <p>{chat[1]?.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats