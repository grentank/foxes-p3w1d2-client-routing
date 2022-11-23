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
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../../contexts/UserContext';
import { logoutUser } from '../../../redux/actions/userActions';

function NavBar(args) {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

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
              <Link to="/counter">Counter</Link>
            </NavItem>
            <NavItem>
              <Link to="/admin">Admin</Link>
            </NavItem>
            <NavItem>
              <Button onClick={() => dispatch(logoutUser())} className="btn-info">Logout</Button>
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
