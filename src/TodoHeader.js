import React,{ Component } from 'react'

import { Navbar, Button, NavItem,  NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class TodoHeader extends Component {
  render () {
    return(
      <Navbar color="faded" light toggleable>
        <NavbarBrand>todozz</NavbarBrand>
        <NavItem>
          <Button color="success">
            <NavLink to="/">home</NavLink>
          </Button>
        </NavItem>
        <NavItem>
          <Button color="success">
            <NavLink to="/junkdrawer">junkDrawer</NavLink>
          </Button>
        </NavItem>
      </Navbar>
    )
  }
}

export default TodoHeader