import {Navigate, Outlet, useLocation} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import AppContext from "../context/Context";

const LogoutLayout = () => {
  const { hash, pathname } = useLocation();
// const isChat = pathname.includes('chat');

  const {
    config: { isFluid}
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

  return (
      <div className={isFluid ? 'container-fluid' : 'container'}>

      </div>
  );
};