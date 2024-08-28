import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function User() {
 const navigate = new useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
        alert("LogOut succesfully")
      };

      const [isCardVisible, setIsCardVisible] = useState(false);

      const toggleCardVisibility = () => {
        setIsCardVisible(!isCardVisible);
      };
    
      return (
        <div className="d-flex justify-content-center align-items-center">
          {/* User Icon */}
          <div className="user-icon" onClick={toggleCardVisibility} style={{ cursor: 'pointer' }}>
            <img src="https://via.placeholder.com/50" alt="User Icon" className="rounded-circle" />
          </div>
    
          {/* Info Card */}
          {isCardVisible && (
            <div className="card position-absolute" style={{ top: '20%', right: '5%' }}>
              <div className="card-body">
                <h5 className="card-title">username</h5>
                <p className="card-text">email</p>
                <button className="btn btn-dark" onClick={logout}><a href="/">Log out</a></button>
              </div>
            </div>
          )}
        </div>
      );
}

export default User
