import React from 'react'
import MaleUser, { FemaleUser } from './UserAvatar'

function Message() {
  return (
  <>
      <div className='message'>
        <div className='messageInfo'>
          {/* <FemaleUser width={24} height={24} />
          <span>just now</span> */}
        </div>
        <div className='messageContent'>
          <span>Hello. How are you doing?</span>
        </div>
      </div>
      <div className='message owner'>
        <div className='messageInfo'>
          {/* <MaleUser width={24} height={24} />
          <span>just now</span> */}
        </div>
        <div className='messageContent'>
          <span>Hi! I'm doing well?</span>
          <span>How about you?</span>
        </div>
      </div>
    </>
  )
}

export default Message