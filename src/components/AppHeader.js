import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBreadcrumb from './AppBreadcrumb'; 
import '../scss/AppHeader.scss'; 

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <header className="app-header">
      <div className="header-container">
        <button
          className="sidebar-toggle"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          &#9776; 
        </button>
      </div>
      <div className="header-divider" />
      <div className="breadcrumb-container">
        <AppBreadcrumb /> 
      </div>
    </header>
  );
};

export default AppHeader;
