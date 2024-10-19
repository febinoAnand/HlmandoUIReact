import React from 'react';
import { useSelector } from 'react-redux';
import AppSidebar from '../components/Appsidebar';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import '../scss/DefaultLayout.scss';
import RoutesComponent from '../routes';

const DefaultLayout = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <div className={`layout-container ${sidebarShow ? 'sidebar-visible' : ''}`}>
      <AppSidebar />
      <div className={`main-content ${sidebarShow ? 'active' : ''}`}>
        <AppHeader />
        <div className="content-area">
        <RoutesComponent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
