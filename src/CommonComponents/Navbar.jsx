import React from 'react';
import Logo from './Logo';
import MaleUser from './UserAvatar';
import { MdLogout } from 'react-icons/md';
import { PageRoutes } from '../utls/PageRoutes';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <span className='logo'><Logo /> Live Chat</span>
      <div className='user'>
       {/* <img src='' width={32} height={32} alt='p' /> */}
       <MaleUser />
       <span>You</span>
       <button onClick={() => navigate(PageRoutes.login)}><MdLogout size={20} /></button>
      </div>
    </div>
  )
}

export default Navbar