import React, {useState} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
function NavMenu() {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/posts">Posts</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavMenu;
