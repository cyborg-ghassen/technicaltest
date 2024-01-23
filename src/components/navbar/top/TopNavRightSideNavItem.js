import NotificationDropdown from 'components/navbar/top/NotificationDropdown';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import React from 'react';
import { Nav } from 'react-bootstrap';

const TopNavRightSideNavItem = () => {

  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <NotificationDropdown />
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
