import React from 'react';
import Navbar from '../CommonComponents/Navbar';
import Search from '../CommonComponents/Search';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
    </div>
  )
}

export default Sidebar