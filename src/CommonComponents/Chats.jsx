import React from 'react'
import MaleUser, { FemaleUser } from './UserAvatar'

function Chats() {
  return (
    <div className='chats'>
      <div className='userProfile'>
          <FemaleUser />
          <span>Chari</span>
      </div>
      <div className='userProfile'>
          <MaleUser />
          <span>Tanishk</span>
      </div>
      <div className='userProfile'>
          <FemaleUser />
          <span>Mom</span>
      </div>
      <div className='userProfile'>
          <MaleUser />
          <span>Dad</span>
      </div>
    </div>
  )
}

export default Chats