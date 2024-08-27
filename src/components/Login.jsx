import React, { useState } from 'react';

function Login() {
  const [gmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else{
        alert('login succesful')
      }
      const responseData = await response.json();
      console.log('Success:', responseData);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={submitFunc}>
          <h2>Login here</h2>
        <input 
          type='email' 
          id='email' 
          value={gmail} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='Enter Username here' 
          className='form-control'
        />
        <br></br>
        <input 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}  
          placeholder='Enter Password here' 
          className='form-control'
        />
        <br></br>
        <input type='submit' id='submit' className='btn btn-dark'/>
        
        <p>New here <a href="/signup">Sign up</a></p>
      
      </form>
    </div>
  );
}

export default Login;
