import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Nav className="me-auto" >
      <Link to = "/addProduct" style={{padding:'30px'}}>AddProduct</Link>
      <Link to = "/updateProduct" style={{padding:'30px'}}>updateProduct</Link>
      <Link to = "/login" style={{padding:'30px'}}>LoginForm</Link>
      <Link to = "/register" style={{padding:'30px'}}>register</Link>
    </Nav>
  </Navbar>

        </div>
    )
}

export default Header
