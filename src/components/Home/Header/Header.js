import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../firebase.init';
import { getAuth, signOut } from "firebase/auth";
import RequireAuth from '../../RequireAuth/RequireAuth';

function Header() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const logOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Book Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/manageinventory'>Manage Inventory</Nav.Link>
                    <Nav.Link as={Link} to='/additem'>Add new item</Nav.Link>
                    <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                      {
                        user?.uid?<Nav.Link onClick={logOut}>Log Out</Nav.Link>:<Nav.Link as={Link} to='/login'>Login</Nav.Link>
                      }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </div>
  )
}

export default Header