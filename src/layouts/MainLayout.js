import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AppContext from '../context/Context';
import NavbarVertical from '../components/navbar/vertical/NavbarVertical';

const MainLayout = () => {
  const { hash, pathname } = useLocation();
// const isChat = pathname.includes('chat');

  const {
    config: { isFluid, navbarPosition, isAuthenticated }
  } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!isAuthenticated) return <Navigate to={'/'} replace />;

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
        <NavbarVertical />
      )}
    </div>
  );
};

export default MainLayout;
