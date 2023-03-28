import React from 'react';
import Logo from './Logo';
import MaleUser from './UserAvatar';


function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'><Logo /> Live Chat</span>
      <div className='user'>
       {/* <img src='' width={32} height={32} alt='p' /> */}
       <MaleUser />
       <span>You</span>
       <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar