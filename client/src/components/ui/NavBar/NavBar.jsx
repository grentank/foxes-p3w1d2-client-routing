import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

function NavBar(args) {
  const { user, logoutHandler } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/">Main</Link>
            </NavItem>
            <NavItem>
              <Link to="/auth">Auth</Link>
            </NavItem>
            <NavItem>
              <Link to="/posts">Posts</Link>
            </NavItem>
            <NavItem>
              <Link to="/admin">Admin</Link>
            </NavItem>
            <NavItem>
              <Button onClick={logoutHandler} className="btn-info">Logout</Button>
            </NavItem>
          </Nav>
          <NavbarText>
            {user?.name ? `Hello, ${user.name}` : 'Not logged in'}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
