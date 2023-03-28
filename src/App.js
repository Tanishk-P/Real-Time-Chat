import './Style.scss';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
            <Route path='/' element={<Login />}/> 
            <Route path='/login' element={<Login /> } /> 
            <Route path='/signup' element={<Register />}/>
        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App;
