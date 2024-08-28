import React, { useState } from 'react';
import Dashboard from './Dashboard';
import {useNavigate} from 'react-router-dom';
import image from '../images/login.jpg'


function Login() {
  const [gmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  
  const submitFunc = async (e) => {
    e.preventDefault();
    const url = 'https://shift-management2.onrender.com/api/auth/login';
    const data = {
      email: gmail,
      password: password
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      
      const responseData = await response.json();
      const token = responseData.token
      localStorage.setItem('userToken', token);
      navigate('/dashboard');
      alert('login successfull');
  
 
    } catch (error) {
      alert("Enter valid Username or Password")
    }
  };

  return (
    <>
    
    <div className='container'>
      <div className='row align-items-start'><div className='col-md-2'></div>
       <div className='col-md-7'>
        <div className='row container1'>
          <div className='col-md-6 '>
            <img className='login-image' src={image} alt="" />
          </div>

          <div className='col-md-6 line'><div className='board'>
      <form onSubmit={submitFunc}>
          <h2>Login here</h2>
        <input 
          type='email' 
          id='email' 
          value={gmail} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='Enter Username here' 
          className='form-control' required
        />
        <br />
        <input 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}  
          placeholder='Enter Password here' 
          className='form-control'required
        />
        <br />
        <div className='row submit'> 
          <div className='col-md-3'>
          <input  type='submit' id='submit' className='btn btn-dark' value='Log in'/>
          </div>

           <div className='col-md-3'><a href="/signup"><input type="button" id='signUp' className='btn btn-primary' value='Sign up'/></a></div>
           <div className='col-md-6'><p>forget password? <a href="">click here</a></p></div>
           </div>
      
      </form>
    </div></div>
        </div>
      </div>
      </div>
      
    </div>
    
    </>
  );
}

export default Login;
