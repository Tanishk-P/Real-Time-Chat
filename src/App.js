import './Style.scss';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { message } from 'antd';

function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      message.error('Not logged in.');
      return (<Navigate to="/login" />);
    }
    return children;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
