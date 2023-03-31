import React from 'react'
import MaleUser, { FemaleUser } from '../UserDetails/UserAvatar'

function Chats() {
  return (
    <div className='chats'>
      <div className='userProfile'>
          <FemaleUser />
          <div className='userChatInfo'>
            <span>Chari</span>
            <p>Hello. How are u doing?</p>
          </div>
      </div>
      <div className='userProfile'>
          <MaleUser />
          <div className='userChatInfo'>
            <span>Tanishk</span>
            <p>Hello</p>
          </div>
      </div>
      <div className='userProfile'>
          <FemaleUser />
          <div className='userChatInfo'>
            <span>Chari</span>
            <p>Hello. How are u doing?</p>
          </div>
      </div>
      <div className='userProfile'>
          <MaleUser />
          <div className='userChatInfo'>
            <span>Tanishk</span>
            <p>Hello</p>
          </div>
      </div>
    </div>
  )
}

export default Chats