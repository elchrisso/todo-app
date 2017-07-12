import React,{ Component } from 'react'

import { Navbar, Nav, Button, NavItem,  NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class TodoHeader extends Component {
  render () {
    return(
      <Navbar color="faded" light toggleable>
        <NavbarBrand>todozz</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/">home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/junkdrawer">junkDrawer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/addtodo">add to</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default TodoHeader