import './components/style.css'

import Login from './components/Login';
import Register from './components/Register';
import cors from "cors";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
cors();

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes><Route path='/' element={<Login/>}/></Routes>
        
        <Routes><Route path='/signup' element={<Register/>}/></Routes>
       
      
    </div>
    </BrowserRouter>
  );
}

export default App;
