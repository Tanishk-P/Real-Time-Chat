import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import Logo from './Logo';
import { User } from '../UserDetails/UserAvatar';
import { Button, Col, message, Popconfirm, Row } from 'antd';
import { MdLogout, MdSettings } from 'react-icons/md';
import { PageRoutes } from '../utls/PageRoutes';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Info } from './ChatIcons';
import { UserDetails } from '../UserDetails/UsersDetails';

function Sidebar() {
  const [isClicked, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const userDetails = UserDetails();

  const confirm = () => {
    message.success('Logged out successfully. Visit Again!');
    navigate(PageRoutes.login);
    signOut(auth);
  };

  const cancel = () => {
    message.error('Great! Glad that you are with us.');
  };

  return (
    <div style={{ borderRight: '1px solid #a6a4df'}} onMouseLeave={() => setHover(false)}>
      <div className='sidebar' style={{ display: isClicked? 'none' : 'block' }}>
        <Navbar />
        <Search />
        <Chats />
        {/* <div className='homeInfo'>
          <span>Powered by <Logo height={24} width={24} /> Live Chat </span>
        </div> */}
      </div>
      <div
        className="logoContainer"
        onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
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
        <Info />
      </div>
        {hover && isClicked && (
          <div className="menu" onMouseLeave={() => setHover(false)} style={{ display: hover? 'flex': 'none', flexDirection:'column' }}>
            <Button type='primary' size={'middle'} style={{ display: 'flex', justifyContent:'center', gap:'5px'}} icon={<User width={24} height={24} />}>{userDetails.name}</Button>
            <Row>
            <Col>
            <Button size='middle' icon={<MdSettings size={18}/>} style={{ display: 'flex', justifyContent:'center', alignContent:'center'}} ></Button>
            </Col>
            <Col>
              <Popconfirm 
                style={{ zIndex: 3000}}
                title='Log Out'
                description='Logging out so soon?'
                onConfirm={confirm}
                onCancel={cancel} 
                okText='Yes'
                cancelText='No'
                placement="bottomRight"
                >
                <Button danger type='primary' size='middle'><MdLogout size={20} /></Button>
              </Popconfirm>
            </Col>
          </Row>
          </div>
        )}
      </div>

    </div>
  )
}

export default Sidebar