import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {jwtDecode} from "jwt-decode";
import userIcon from '../images/user.png'
import userGif from '../images/user.gif'
function User() {
    
    const token = localStorage.getItem('userToken');
    const user = jwtDecode(token);
    const navigate = new useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
        alert("LogOut succesfully")
      };

      const [isCardVisible, setIsCardVisible] = useState(false);
      const [clicked, setClicked] = useState(true);
      const toggleCardVisibility = () => {
        setIsCardVisible(!isCardVisible);
        setClicked(!clicked);

      };
    
      return (
        <div className="d-flex justify-content-center align-items-center">
          {/* User Icon */}
          
          <div className="user-icon" onClick={toggleCardVisibility} style={{ cursor: 'pointer' }}>
            <img src={clicked ? userIcon : userGif} alt="User Icon" className=" userIcon" />
          </div>
    
          {/* Info Card */}
          {isCardVisible && (
            <div className="card position-absolute" style={{ top: '20%', right: '5%' }}>
              <div className="card-body">
                <h5 className="card-title">Hello, {user.name}</h5>
                <p className="card-text">Email:-{user.email}</p>
                <p className="card-text">Role:-{user.role}</p>
                <button className="btn btn-dark" onClick={logout}><a href="/">Log out</a></button>
              </div>
            </div>
          )}
        </div>
      );
}

export default User
