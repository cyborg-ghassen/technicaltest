import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import React from 'react';
import { Nav } from 'react-bootstrap';

const TopNavRightSideNavItem = () => {

  return (
      <Nav
          navbar
          className="navbar-nav-icons ms-auto flex-row align-items-center me-3"
          as="ul"
      >
        <NotificationDropdown/>
        <p className={"text-dark mt-2 ms-2 me-2"}>Welcome, unit!</p>
        <ProfileDropdown/>
      </Nav>
  );
};

export default TopNavRightSideNavItem;
