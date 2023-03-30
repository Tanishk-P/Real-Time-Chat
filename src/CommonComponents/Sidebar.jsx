import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import Logo from './Logo';
import MaleUser from './UserAvatar';
import { Button, Col, Row } from 'antd';
import { MdLogout, MdSettings } from 'react-icons/md';
import { PageRoutes } from '../utls/PageRoutes';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [isClicked, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className='sidebar' style={{ display: isClicked? 'none' : 'block' }}>
        <Navbar />
        <Search />
        <Chats />
        <div className='homeInfo'>
          <span>Powered by <Logo height={24} width={24} /> Live Chat </span>
        </div>
      </div>
      <div
        className="logoContainer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='logoButton'
        onClick={() => setClick(!isClicked)} 
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          padding: '5px',
          borderRadius: '10px',
          zIndex: 3000,
          left: '160px',
          top: '70px',
          boxShadow: "0 0 40px rgb(0, 50, 50)",
      }}>
        <Logo height={36} width={36} />
      </div>
        {hover && isClicked && (
          <div className="menu">
            <Button size='middle' icon={<MdSettings size={18}/>} style={{ display: 'flex', alignItems: 'center'}} >Settings</Button>
            <Row>
            <Col>
              <Button type='primary' size={'middle'} shape={'default'} icon={<MaleUser width={24} height={24} />} ></Button>
            </Col>
            <Col>
              <Button danger onClick={() => navigate(PageRoutes.login)} type='primary' size='middle'><MdLogout size={20} /></Button>
            </Col>
          </Row>
          </div>
        )}
      </div>

    </div>
  )
}

export default Sidebar