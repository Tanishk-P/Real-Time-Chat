import './Style.scss';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
            <Route path='/' element={<Login />}/> 
            <Route path='/login' element={<Login /> } /> 
            <Route path='/signup' element={<Register />}/>
            <Route path='/home' element={<Home />}/>
        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App;
