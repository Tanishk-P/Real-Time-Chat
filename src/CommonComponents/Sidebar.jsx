import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import Logo from './Logo';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
      <div className='homeInfo'>
        <span>Powered by <Logo height={24} width={24} /> Live Chat </span>
      </div>
    </div>
  )
}

export default Sidebar