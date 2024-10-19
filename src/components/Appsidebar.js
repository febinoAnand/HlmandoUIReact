import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import logoImage from '../assets/images/HLMANDO.svg';
import SimpleBar from 'simplebar-react';
import 'simplebar-core/dist/simplebar.css';
import navigation from '../_nav'; 
import '../scss/Sidebar.scss';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false); 
  const navigate = useNavigate(); 

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    dispatch({ type: 'set', sidebarShow: !isExpanded }); 
  };

  const handleLogout = () => {
    navigate('/login'); 
  };

  const sidebarWidth = isExpanded ? '250px' : '40px'; 

  return (
    <div className="app-container">
      <div 
        className={`app-sidebar ${sidebarShow ? 'visible' : ''}`} 
        style={{ width: sidebarWidth }}
        onMouseEnter={() => setIsExpanded(true)}  
        onMouseLeave={() => setIsExpanded(false)} 
      >
        <div className="sidebar-brand">
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: 'auto', width: isExpanded ? '100%' : '40px' }}
          />
        </div>
        <nav className="sidebar-nav">
          <SimpleBar style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <ul>
              {Array.isArray(navigation) ? (
                navigation.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: isExpanded ? '15px' : '0' }}>
                      {item.icon}
                    </span>
                    {isExpanded && (
                      <Link to={item.path} style={{ color: 'white', textDecoration: 'none' }}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))
              ) : (
                <li>Error: Navigation data is not an array</li>
              )}
            </ul>
          </SimpleBar>
        </nav>
        
        <div className="logout-container">
          <Link to="/login" onClick={handleLogout} style={{ color: 'white' }}>
            <i className="fas fa-sign-out-alt"></i>
            {isExpanded && ' Logout'}
          </Link>
        </div>

        <div 
          className="sidebar-toggler" 
          onClick={handleToggle} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'absolute',
            bottom: '8px', 
            left: '70%',
            transform: 'translateX(-50%)',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          {isHovered ? '>' : '<'}
        </div>
      </div>
      
      <div 
        className="main-content"
      >
      </div>
    </div>
  );
};

export default React.memo(AppSidebar);
