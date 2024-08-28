import React, { useState } from 'react'
import image from '../images/login.jpg'

function Register() {
  
  const [gmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [asignHours,setAsignHours] = useState('');
  const [role,setRole] = useState('');

  const submitFunc = async (e) => {
    e.preventDefault();

    const url = 'https://shift-management2.onrender.com/api/auth/register';
    const data = {
      name:name,
      email: gmail,
      password: password,
      assignedShiftHours:asignHours,
      role:role
    };

    console.log(data);

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
        
        alert('Register succesfully')
      }
      const responseData = await response.json();
      console.log('Success:', responseData);

    } catch (error) {
      console.error('Error:', error);
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
          <h2>Register here</h2>
        <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name here'className='form-control'required/>
        <br />
        <input type='email' id='email'  value={gmail}  onChange={(e) => setEmail(e.target.value)}  placeholder='Enter Username here'  className='form-control'required/>
        <br />
        <input type='text' id='asignHours' value={asignHours} onChange={(e)=>setAsignHours(e.target.value)} placeholder='Enter Asign hours' className='form-control'required />
        <br />
        <input type='role' id='role' value={role} onChange={(e)=>setRole(e.target.value)} placeholder='Enter your role'className='form-control'required/>
        <br />
        <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password here'className='form-control'required/>
        <br />
        <div className='row submit'> 
          <div className='col-md-3'>
          <input  type='submit' id='submit' className='btn btn-dark'/>
          </div>

           <div className='col-md-3'><a href="/"><input type="button" id='login' className='btn btn-primary' value='Sign in'/></a></div>
           
           </div>
        
      </form>
   </div>
    </div></div>
        </div>
      </div>
      </div>
      
    
    
    </>
  )
}

export default Register
