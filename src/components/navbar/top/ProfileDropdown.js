import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import avatar from 'assets/images/profile pic 48px.png';
import Avatar from 'components/common/Avatar';
import { toast } from 'react-toastify';

const ProfileDropdown = () => {
  const handleLogout = async () => {
    localStorage.clear()
    toast.success("successfully logged out.", {theme: "colored"})
  };
  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className="pe-0 ps-2 nav-link"
      >
        <Avatar src={avatar} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item as={Link} to="/user/profile">
            Profile &amp; account
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/user/settings">
            Settings
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            onClick={handleLogout}
            to="/authentication/card/logout"
          >
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
