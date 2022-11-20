import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap'
function NavBar(){
    return(
        <>
            <Navbar bg="" expand='lg'>
<NavbarBrand href="#">links</NavbarBrand>
<Nav>
    <NavItem><NavLink>home</NavLink></NavItem>
    <NavItem><NavLink>home</NavLink></NavItem>
    <NavItem><NavLink>home</NavLink></NavItem>
</Nav>
            </Navbar>
        </>
    )
}
export default NavBar;